// Makes src/generated from Hivenza's OpenAPI file: the types (schema.ts) and a table of every
// operation (operations.ts) the client calls by. Usage:
//   npm run generate                      uses spec/openapi.json
//   npm run generate -- https://hivenza.com/developers/openapi.json     downloads it first
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import openapiTS, { astToString } from 'openapi-typescript';

const source = process.argv[2] ?? 'spec/openapi.json';
if (/^https:\/\//.test(source)) {
  const response = await fetch(source);
  if (!response.ok) throw new Error(`Could not download ${source}: ${response.status}`);
  writeFileSync('spec/openapi.json', JSON.stringify(await response.json(), null, 2) + '\n');
}
const spec = JSON.parse(readFileSync('spec/openapi.json', 'utf8'));
mkdirSync('src/generated', { recursive: true });

const banner = `// Made by scripts/generate.mjs from spec/openapi.json (Hivenza API ${spec.info?.version ?? ''}). Do not edit by hand.\n`;
const ast = await openapiTS(spec);
writeFileSync('src/generated/schema.ts', `${banner}/* eslint-disable */\n${astToString(ast)}`);

const METHODS = ['get', 'post', 'put', 'patch', 'delete'];
const entries = [];
for (const [path, item] of Object.entries(spec.paths)) {
  for (const method of METHODS) {
    const op = item[method];
    if (!op) continue;
    const params = [...(item.parameters ?? []), ...(op.parameters ?? [])].map((p) => (p.$ref ? spec.components.parameters[p.$ref.split('/').pop()] : p));
    entries.push({
      id: op.operationId,
      method: method.toUpperCase(),
      path,
      tag: op.tags?.[0] ?? '',
      summary: op.summary ?? '',
      scopes: op['x-scopes'] ?? [],
      pathParams: [...path.matchAll(/\{(\w+)\}/g)].map((m) => m[1]),
      queryParams: params.filter((p) => p.in === 'query').map((p) => p.name),
      body: Boolean(op.requestBody),
    });
  }
}
entries.sort((a, b) => a.id.localeCompare(b.id));
const table = entries.map((e) => `  ${e.id}: ${JSON.stringify(e)},`).join('\n');
writeFileSync(
  'src/generated/operations.ts',
  `${banner}export interface OperationInfo {\n  id: string;\n  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';\n  path: string;\n  tag: string;\n  summary: string;\n  // The permissions an API key needs for this call.\n  scopes: string[];\n  pathParams: string[];\n  queryParams: string[];\n  body: boolean;\n}\n\nexport const OPERATIONS = {\n${table}\n} as const satisfies Record<string, OperationInfo>;\n`,
);
console.log(`${entries.length} operations, ${Object.keys(spec.components?.schemas ?? {}).length} schemas`);
