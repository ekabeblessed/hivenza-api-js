// Made by scripts/generate.mjs from spec/openapi.json (Hivenza API v1). Do not edit by hand.
/* eslint-disable */
export interface paths {
    "/workspace": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * The key and its workspace
         * @description Who the key belongs to, what it may do, and the workspace’s limits and calls today. A good first call to check a key works.
         */
        get: operations["getWorkspace"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/brands": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List brands */
        get: operations["listBrands"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/brands/{brandId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a brand */
        get: operations["getBrand"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/accounts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List connected accounts
         * @description Accounts are connected in the app (a person signs in to each network). This lists them with what each can publish.
         */
        get: operations["listAccounts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/accounts/{accountId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get an account */
        get: operations["getAccount"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/accounts/{accountId}/youtube/playlists": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List a YouTube channel’s playlists
         * @description The channel’s own playlists, to put a video into with variants[].youtube.playlistIds or POST …/playlists/{playlistId}/videos.
         */
        get: operations["listYoutubePlaylists"];
        put?: never;
        /**
         * Make a YouTube playlist
         * @description A new playlist on the channel, with the visibility you choose (privacy is required, never defaulted).
         */
        post: operations["createYoutubePlaylist"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/accounts/{accountId}/youtube/playlists/{playlistId}/videos": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Put a published video into a YouTube playlist
         * @description A post already published on this channel (postId), or any of the channel’s videos (videoId). A video already in the playlist isn’t added twice.
         */
        post: operations["addToYoutubePlaylist"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/media/uploads": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Start an upload
         * @description Returns a signed address: PUT the file there with the headers given (within 15 minutes), then call POST /media/{mediaId}/complete. Works for files up to the network limits (videos up to several GB).
         */
        post: operations["createUpload"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/media/{mediaId}/complete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Finish an upload
         * @description After the PUT: Hivenza checks what arrived (type, size, dimensions) and marks the file ready or rejected. For videos, send their width, height and length if you know them.
         */
        post: operations["completeUpload"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/media/from-url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add a file from a link
         * @description Hivenza downloads an image or video (up to 25 MB) from a public HTTPS address. Bigger files: use POST /media/uploads. Several files at once: POST /media/from-urls.
         */
        post: operations["createMediaFromUrl"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/media/from-urls": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add several files from links
         * @description Up to 10 links, downloaded at the same time (a listing’s photos in one call). Each one answers on its own: `media` when it worked, `error` when it didn’t, in the order sent; one bad link doesn’t stop the others.
         */
        post: operations["createMediaFromUrls"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/media/ai-images": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Make pictures with AI
         * @description Makes pictures from a description, or changes one of the brand’s pictures (`sourceMediaId`). The files come back at once with status `uploading` and turn `ready` in about 10–30 seconds (poll GET /media/{mediaId}); a post scheduled with them waits for them. Each picture costs AI credits, given back when it can’t be made (status `rejected`, with the reason). Pictures carry the IPTC “made with AI” label, and TikTok and YouTube posts using them are labelled as AI-generated.
         */
        post: operations["generateImages"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ai/writing": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Write with AI
         * @description Writes a post from a brief, says the words another way, shortens them, translates them, or suggests hashtags, in the brand’s voice and the network’s limits. One AI credit each time, given back when the AI service can’t answer. Nothing is saved: put the words in a post yourself.
         */
        post: operations["writeWithAi"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/media": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List media
         * @description Newest first. Search by name with `q`, narrow by folder, type and status. `view=short` answers each file in a few words (name, type, size, ratio, folder, state) without links: for reading many at once.
         */
        get: operations["listMedia"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/media/{mediaId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a file */
        get: operations["getMedia"];
        put?: never;
        post?: never;
        /**
         * Delete a file
         * @description Refused while a draft or scheduled post uses it.
         */
        delete: operations["deleteMedia"];
        options?: never;
        head?: never;
        /**
         * Change a file’s details
         * @description Its name, alt text, tags or folder (folder_…, or null for the library itself). Only what is sent changes.
         */
        patch: operations["updateMedia"];
        trace?: never;
    };
    "/media/{mediaId}/crop": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Crop a picture to a ratio
         * @description Makes a new picture cut to a ratio (1:1, 4:5, 1.91:1, 9:16, 16:9, 2:3, or original to trim edges), ready at once; the original stays. Without `area` the largest centred part is kept. Use the new id in the post instead of the original. A validation issue with `fix.kind` "crop" gives the file and the ratio to use.
         */
        post: operations["cropMedia"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/media/{mediaId}/fit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Make a file fit a network
         * @description Makes a new file in the background, the original kept: a video trimmed to `maxSec`, reframed to 9:16 (`ratio`), or made smaller than `maxBytes`; a picture made smaller than `maxBytes`. The answer is the new file while it is made (status uploading): check get_media until it is ready, then use its id in the post. A validation issue with `fix.kind` "video" gives the values to send.
         */
        post: operations["fitMedia"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/media-folders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List media folders
         * @description A brand’s folders by name, each with how many ready files it holds, and how many are in no folder.
         */
        get: operations["listMediaFolders"];
        put?: never;
        /** Create a media folder */
        post: operations["createMediaFolder"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/media-folders/{folderId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete a media folder
         * @description files=move (the default) puts its files back in the library; files=delete deletes them with it, refused while a post that hasn’t gone out uses one.
         */
        delete: operations["deleteMediaFolder"];
        options?: never;
        head?: never;
        /** Rename a media folder */
        patch: operations["renameMediaFolder"];
        trace?: never;
    };
    "/posts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List posts
         * @description Newest first. With updatedAfter, everything changed since a moment (to keep a copy in sync). Narrow by brand, status, a scheduled time range, an account and a label.
         */
        get: operations["listPosts"];
        put?: never;
        /**
         * Create a post
         * @description A draft by default. publish=schedule (with scheduledAt), queue or now sends it out, which needs the posts:publish permission; when the workspace asks for approval it goes to an approver instead (approval.state = "pending"), unless the key may skip approval. Anything that goes out is checked against every network’s rules first.
         */
        post: operations["createPost"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/posts/validate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Check a post without saving it
         * @description Runs every network’s rules (length, media, formats) on what POST /posts would make. Nothing is saved.
         */
        post: operations["validatePost"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/posts/{postId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a post
         * @description With each account’s outcome: published (with its link and the network’s id), failed (with why), or waiting.
         */
        get: operations["getPost"];
        put?: never;
        post?: never;
        /**
         * Delete a post
         * @description From Hivenza: a scheduled post won’t go out. What is already published stays on the networks.
         */
        delete: operations["deletePost"];
        options?: never;
        head?: never;
        /**
         * Change a post
         * @description Drafts, scheduled and failed posts. A scheduled post stays scheduled, checked again. Published posts are locked. `variants` merge into the post by account: an account not named keeps its text, files, format and options, and a named one takes what is given (network options key by key). The accounts change only with `accountIds` (the full list); `removedAccountIds` and `addedAccountIds` in the answer say what changed.
         */
        patch: operations["updatePost"];
        trace?: never;
    };
    "/posts/{postId}/approval": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Approve a post, or ask for changes
         * @description For a post waiting for approval. Approved, it goes out at its time (or the one sent); with changes asked for, it goes back to its author with the note. Owners, admins and roles that approve posts only.
         */
        post: operations["decideApproval"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/posts/{postId}/take-down": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Take a published post off the networks
         * @description Deletes the published copies from the networks, for the accounts given or every account it can be deleted from (an item sold, an offer ended). The post stays in Hivenza with each account’s removal state; the networks are asked in the background, and the post.deleted webhook is not sent until you delete it from Hivenza. Networks that don’t let other apps delete posts are listed in `skipped` with why.
         */
        post: operations["takePostDown"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/posts/{postId}/schedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Schedule a post
         * @description Puts a draft on the schedule, or moves a scheduled post. Goes to an approver when the workspace asks for approval.
         */
        post: operations["schedulePost"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/posts/{postId}/queue": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add a post to the queue
         * @description Schedules it at the brand’s next free queue time (Pro).
         */
        post: operations["queuePost"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/posts/{postId}/publish": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Publish a post now
         * @description Sends it out now, to real audiences on a live key.
         */
        post: operations["publishPost"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/posts/{postId}/unschedule": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Take a post off the schedule
         * @description It goes back to drafts.
         */
        post: operations["unschedulePost"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/posts/{postId}/retry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Try a failed post again
         * @description Sends it again to the accounts where it failed.
         */
        post: operations["retryPost"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/brands/{brandId}/queue": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * The brand’s posting queue
         * @description Its weekly times (in the brand’s timezone) and the next free one.
         */
        get: operations["getQueue"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/brands/{brandId}/best-times": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Best times to post
         * @description From the brand’s own published posts: when they got the most engagement, by weekday and hour in the brand’s timezone (Pro).
         */
        get: operations["getBestTimes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/test/reset": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reset the test accounts
         * @description Test keys only: every simulated account back to working (after a “[fail:auth]” post, for example). Put “[fail:auth]”, “[fail:retryable]” or “[fail:permanent]” in a test post’s text to see each failure.
         */
        post: operations["resetTestBrand"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/designs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List designs */
        get: operations["listDesigns"];
        put?: never;
        /**
         * Make a design
         * @description From a short brief, the AI writes the words (headline, subline, price, button, handle) and makes a background photo with no words on it; the words go on top as live text in the brand kit’s colours and fonts. The words come back at once; the background follows (`background: making`, poll GET /designs/{designId}). Prices, dates and places are kept as written. The background costs a picture’s AI credits, given back if it can’t be made; the words are free.
         */
        post: operations["createDesign"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/designs/{designId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a design */
        get: operations["getDesign"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Change a design’s words, template or shape
         * @description Free: no AI is asked. Words are set by role; an empty string hides that line. Switching template or shape keeps every word.
         */
        patch: operations["updateDesign"];
        trace?: never;
    };
    "/designs/{designId}/background": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Make a new background, keeping the words
         * @description Costs a picture’s AI credits, given back if it can’t be made. Up to 8 backgrounds per design.
         */
        post: operations["newDesignBackground"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/designs/{designId}/copy": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Write new words, keeping the background
         * @description Free (up to 20 times per design). Each line keeps its place and look.
         */
        post: operations["rewriteDesignWords"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/designs/{designId}/export": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Save a design as a picture
         * @description Draws the design at its shape’s size into a PNG in the media library (labelled as made with AI). Use its id in a post. Exporting again replaces the earlier picture in drafts and scheduled posts.
         */
        post: operations["exportDesign"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/brands/{brandId}/mail-method": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * How a brand’s email leaves
         * @description Through Hivenza, or through the brand’s own mail system (Microsoft 365, Google Workspace, its own Amazon SES, an SMTP server, a relay it runs), and whether that works. Read only: what the method holds is never returned.
         */
        get: operations["getBrandMailMethod"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List conversations
         * @description Every channel’s conversations and tickets, the most recent activity first.
         */
        get: operations["listConversations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/{conversationId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a conversation */
        get: operations["getConversation"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Change a conversation
         * @description State, assignee, team, tags, priority, type, due date and ticket fields, with the same rules as in the app (solving needs the required fields; assignees must see the brand).
         */
        patch: operations["updateConversation"];
        trace?: never;
    };
    "/conversations/{conversationId}/messages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List a conversation’s messages
         * @description Newest first. Notes for the team are apart, at /notes.
         */
        get: operations["listMessages"];
        put?: never;
        /**
         * Reply
         * @description Sends a reply on the conversation’s own channel, within its rules: a private chat on Messenger, Instagram or WhatsApp only within its reply window (see replyWindowEndsAt), each network’s length limit. It goes out within seconds; read its status from the message, or wait for the message.sent webhook. It takes the chat from the AI agent, and counts as the team’s reply for service targets.
         */
        post: operations["replyToConversation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/{conversationId}/notes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List the team’s notes */
        get: operations["listNotes"];
        put?: never;
        /**
         * Add a note for the team
         * @description Shown in the conversation to the team, never sent to the customer.
         */
        post: operations["addNote"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/{conversationId}/history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * A ticket’s history
         * @description Everything that happened to it, oldest first: messages, notes, changes and who made them, rules, missed targets, ratings.
         */
        get: operations["getTicketHistory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ticket-fields": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List ticket fields
         * @description The workspace’s own fields on tickets, with their keys (as in conversations’ fields) and choices.
         */
        get: operations["listTicketFields"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tickets": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Open a ticket
         * @description From your own contact form, app or system: a ticket with the customer’s email, answered by email from the brand’s support address (the brand needs one, set up in the app). Set fields, priority, tags and an assignee in the same call; the ticket gets its number, service targets and rules like any other.
         */
        post: operations["createTicket"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contacts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List contacts
         * @description The people who write to the brand, one per person across channels.
         */
        get: operations["listContacts"];
        put?: never;
        /**
         * Add a contact
         * @description Refused when one with the same email or phone exists in the brand (409, with its id): use POST /contacts/upsert to add or change in one call.
         */
        post: operations["createContact"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contacts/{contactId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a contact */
        get: operations["getContact"];
        put?: never;
        post?: never;
        /**
         * Delete a contact
         * @description Their conversations stay, as the team’s record, without the link to the contact.
         */
        delete: operations["deleteContact"];
        options?: never;
        head?: never;
        /** Change a contact */
        patch: operations["updateContact"];
        trace?: never;
    };
    "/contacts/{contactId}/campaigns": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List what campaigns did with a contact
         * @description Newest first: entered, sent (and on which channel), opened, clicked, replied, unsubscribed, not sent (with why), goal and left early, with the campaign each belongs to.
         */
        get: operations["listContactCampaigns"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contacts/upsert": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add or change a contact
         * @description Finds the brand’s contact by email or phone and changes it, or adds it. For keeping contacts in sync with a shop or a CRM. Lists given replace the contact’s (fields: merged, yours win).
         */
        post: operations["upsertContact"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contacts/{contactId}/merge": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Merge two contacts
         * @description The other contact joins this one (identities, emails, phones, tags, fields, conversations) and is gone.
         */
        post: operations["mergeContacts"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/users/{userId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Tell Hivenza about a person on your site
         * @description Who someone signed in on your site is, and the details your team should see in their chats (plan, company, renewal date…), from your server: trusted over what the page sends. The same as PUT /api/public/chat/{key}/users/{userId} with the chat’s secret.
         */
        put: operations["putSiteUser"];
        post?: never;
        /**
         * Forget a person on your site
         * @description What Hivenza kept about them from your site is removed (their chats stay).
         */
        delete: operations["deleteSiteUser"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/users/{userId}/unread": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Unread answers for a person
         * @description How many answers from the team (or the AI agent) a person signed in on your site or app hasn’t seen yet in the website chat: for the badge on your app’s chat button. Opening the chat marks them seen.
         */
        get: operations["getChatUnread"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/test/conversations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Simulate a customer writing
         * @description Test keys only: a message from a pretend customer on one of the test brand’s networks (a private chat, or a comment). Rules, service targets, the AI agent and webhooks run as for a real one; replies to it go nowhere.
         */
        post: operations["createTestConversation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/analytics/accounts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Account analytics
         * @description The brand’s accounts over a range of days (in the brand’s timezone): all of them together against the period just before, and each account with its totals and its numbers day by day.
         */
        get: operations["getAccountAnalytics"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/analytics/posts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Post analytics
         * @description Posts published in the range, each account’s copy with its latest numbers, the best engagement first; and the figures by label (campaign).
         */
        get: operations["getPostAnalytics"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/posts/{postId}/insights": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * One post’s numbers
         * @description Each account the post went to, with its latest numbers.
         */
        get: operations["getPostInsights"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/analytics/inbox": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Inbox analytics
         * @description Conversations in and answered, response times, by channel and by teammate, against the period just before.
         */
        get: operations["getInboxAnalytics"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/analytics/website": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Website visitors
         * @description The visitors of the brand’s website, counted by Hivenza’s own script on the site (or by the website chat when it runs there; no cookies of anyone else’s; visitors whose browser says Do Not Track or Global Privacy Control, or whose site says they declined, are left out): by day, week, month or year in the brand’s timezone, new and returning, visits, page views, chats started, the top pages, sources, countries and devices, against the period just before.
         */
        get: operations["getWebsiteVisitors"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/analytics/website-ga4": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Website traffic from Google Analytics 4
         * @description What the brand’s own Google Analytics 4 property counted (the brand connects it in the app: Analytics → Website (GA4)): sessions, new users, engaged sessions, key events and revenue by day in the brand’s timezone, and by source and medium, with the visits Hivenza’s own link tags brought matched to the network, post and campaign that sent them, beside organic, paid and the rest. At most 92 days. Google keeps a free quota per property: reports are kept for an hour, and when Google is limiting the property the last report is returned with stale true.
         */
        get: operations["getWebsiteGa4"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/websites": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Websites counted
         * @description The websites Hivenza’s script counts for the brand: each with its domains, how it counts (cookieless or with a persistent id once the visitor agreed) and whether the script has reached us.
         */
        get: operations["listWebsites"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/analytics/website/overview": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Website overview
         * @description Everything the Overview shows for one website, for a period compared with another and any filters (a source, campaign, country, device, page, a social post by its slug…): visitors, visits, page views, bounce rate, visit duration, conversions and revenue with the trend, top pages and entry and exit pages, sources, campaigns, countries, devices, outbound links, downloads, 404 pages, events, goals, and notes (the brand’s posts that went out are pinned to their days).
         */
        get: operations["getWebsiteOverview"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/analytics/website/posts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * What each post, campaign or network brought
         * @description For each social post (or campaign, or network) whose tagged link brought visitors: its visits, chats started, tickets, goals reached and revenue, with the post’s words, networks and comments beside the traffic.
         */
        get: operations["getWebsiteJourney"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/analytics/website/funnels": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Website funnels
         * @description Each funnel of the website (steps taken in order within one visit) with how many visits got through each step, from the previous step and from the start.
         */
        get: operations["getWebsiteFunnels"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/analytics/support": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Support analytics
         * @description Tickets created and solved, resolution and reply times, service targets met and missed, backlog, ratings, the AI agent, teams and teammates; with the inbox’s filters.
         */
        get: operations["getSupportAnalytics"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/listening/searches": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List saved searches */
        get: operations["listListeningSearches"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/listening/mentions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List mentions
         * @description Posts the brand’s saved searches found, newest first.
         */
        get: operations["listMentions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/webhooks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List webhooks */
        get: operations["listWebhooks"];
        put?: never;
        /**
         * Add a webhook
         * @description The signing secret is in this answer only. Each delivery is signed: Hivenza-Signature: t=<unix seconds>,v1=<hex HMAC-SHA256 of "<t>.<body>"> (also sent as X-Hivenza-Signature). Check it, and refuse a t more than 5 minutes old. Answer 2xx within 10 seconds; anything else is tried again after 1, 5 and 30 minutes, 2 and 6 hours.
         */
        post: operations["createWebhook"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/webhooks/events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * The events webhooks can get
         * @description Every event, what it means, and an example of its data.
         */
        get: operations["listWebhookEvents"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/webhooks/{webhookId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a webhook */
        get: operations["getWebhook"];
        put?: never;
        post?: never;
        /** Remove a webhook */
        delete: operations["deleteWebhook"];
        options?: never;
        head?: never;
        /**
         * Change a webhook
         * @description Switching one on again (enabled: true) starts its failure count afresh.
         */
        patch: operations["updateWebhook"];
        trace?: never;
    };
    "/webhooks/{webhookId}/roll-secret": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * A new signing secret
         * @description The old secret stops at once; the new one is in this answer only.
         */
        post: operations["rollWebhookSecret"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/webhooks/{webhookId}/test": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send a test
         * @description Sends an event’s example now, marked "test": true (or a plain ping), and says what the address answered.
         */
        post: operations["testWebhook"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/webhooks/{webhookId}/deliveries": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * A webhook’s deliveries
         * @description Newest first, 30 days. Each one’s body is the event (GET /events/{eventId}).
         */
        get: operations["listWebhookDeliveries"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/webhooks/{webhookId}/deliveries/{deliveryId}/resend": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send a delivery again
         * @description The same body, now, once.
         */
        post: operations["resendWebhookDelivery"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List events
         * @description Every event of the workspace in the last 30 days, newest first, whether or not a webhook listens: to catch up after your endpoint was down, or to poll instead of receiving webhooks.
         */
        get: operations["listEvents"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/events/{eventId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get an event */
        get: operations["getEvent"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List workflows
         * @description Every workflow of the workspace, in the order they act.
         */
        get: operations["listWorkflows"];
        put?: never;
        /**
         * Create a workflow
         * @description A draft, from a graph or empty. Nothing runs until it is published.
         */
        post: operations["createWorkflow"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/{workflowId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a workflow
         * @description With its graph (the draft when there is one), the live graph beside it, and what blocks publishing.
         */
        get: operations["getWorkflow"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/{workflowId}/draft": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Save a workflow’s draft
         * @description The graph to publish next. The live version keeps running until then. Answers the problems that would block publishing.
         */
        put: operations["saveWorkflowDraft"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/{workflowId}/publish": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Publish a workflow
         * @description Its draft goes live (runs already going finish on the version they started with). Where the workspace asks for four eyes, it waits for someone else to approve it in the app: awaitingApproval says so.
         */
        post: operations["publishWorkflow"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/{workflowId}/pause": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Pause a workflow
         * @description It starts no new runs; runs going finish unless stopRunning is true.
         */
        post: operations["pauseWorkflow"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/{workflowId}/resume": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Resume a workflow
         * @description Live again, on its published version.
         */
        post: operations["resumeWorkflow"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/{workflowId}/runs": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List a workflow’s runs
         * @description Newest first, on the key’s brands.
         */
        get: operations["listWorkflowRuns"];
        put?: never;
        /**
         * Start a run
         * @description Runs a live workflow now, on a conversation or a contact (or on neither, for one started from the API), with the values it starts with (its inputs, {{vars.name}} in its steps; unknown names and missing required ones are refused). Its trigger must be "From the API" or "Run by hand" (by hand needs a conversation). The audience is not checked: you chose who. Send an Idempotency-Key so a retry starts it once.
         */
        post: operations["runWorkflow"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflow-runs/{runId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a run
         * @description With every step it did, in order: the run log codes and the words after them.
         */
        get: operations["getWorkflowRun"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/{conversationId}/procedure-answer": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Answer an AI procedure that waits
         * @description When the AI agent follows a procedure that waits for your system or your team (a refund approved, a delivery booked), this answer lets it go on with the customer at once. The answer is read as data, never as instructions.
         */
        post: operations["answerAiProcedure"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflow-runs/{runId}/stop": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Stop a run
         * @description A run going or waiting stops where it is.
         */
        post: operations["stopWorkflowRun"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/{workflowId}/campaign-analytics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a campaign’s numbers
         * @description Entered, reached, opened, clicked, replied, goal, unsubscribed and what wasn’t sent (with why), for each send step, by day and by A/B way, on the key’s brands.
         */
        get: operations["getCampaignAnalytics"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/workflows/{workflowId}/campaign-people": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List the people behind a campaign’s number
         * @description Who entered, was sent a step, opened, clicked, replied, reached the goal, unsubscribed, wasn’t sent something (with why) or left early: most recent first.
         */
        get: operations["listCampaignPeople"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/knowledge-sources": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List knowledge sources
         * @description Everything the AI answers from, with each source’s state (queued, processing, ready, failed and why).
         */
        get: operations["listKnowledgeSources"];
        put?: never;
        /**
         * Add a knowledge source
         * @description A web page, a whole site, a sitemap, text, questions and answers, the help centre or resolved tickets (the team’s only). It is read in the background: its status goes from queued to ready (or failed, with why). Files are added on the website.
         */
        post: operations["createKnowledgeSource"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/knowledge-sources/{sourceId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a knowledge source
         * @description One source with its state and what it read.
         */
        get: operations["getKnowledgeSource"];
        put?: never;
        post?: never;
        /**
         * Remove a knowledge source
         * @description The AI stops using it at once; its pieces, vectors and any file are deleted.
         */
        delete: operations["deleteKnowledgeSource"];
        options?: never;
        head?: never;
        /**
         * Change a knowledge source
         * @description Switch it on or off, rename it, change who it answers, its brands, its notes for the AI, a site’s paths and schedule, its questions and answers, or its text. A change of content reads it again.
         */
        patch: operations["updateKnowledgeSource"];
        trace?: never;
    };
    "/knowledge-sources/{sourceId}/refresh": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Read a knowledge source again
         * @description A site that changed, or one that failed: read again now.
         */
        post: operations["refreshKnowledgeSource"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/knowledge/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Search the AI’s knowledge
         * @description The pieces the AI would use for a question, for one brand and audience, with their sources and scores, and whether it would be sure. No AI answer is written (and no credit used).
         */
        post: operations["searchKnowledge"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/reports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List reporting datasets
         * @description Every dataset with its field dictionary: each field’s name, type, whether it can be empty, and what it means. Types: string, integer, number, boolean, timestamp (ISO 8601, UTC), date (YYYY-MM-DD, UTC), string_list (an array; "|"-joined in CSV) and json (an object of numbers; JSON text in CSV).
         */
        get: operations["listReportDatasets"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/reports/conversations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Conversations
         * @description Every conversation in the inbox, on every channel: its state, who handled it, its times and targets, the customer’s rating, the AI agent’s part, complaints. Customers are identified by ids, never by name, email address or phone number; join to contacts through the API where your role allows. Rows come oldest first by `dateField` (createdAt, updatedAt, solvedAt, closedAt), then by id; keep `nextCursor` to carry on later. Every brand the key reaches, or one with brandId.
         */
        get: operations["reportConversations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/reports/tickets": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Tickets
         * @description The private conversations the support desk handles (email, website chat, messages on every network), with the same fields as conversations; public comment threads are left out. Customers are identified by ids, never by name, email address or phone number; join to contacts through the API where your role allows. Rows come oldest first by `dateField` (createdAt, updatedAt, solvedAt, closedAt), then by id; keep `nextCursor` to carry on later. Every brand the key reaches, or one with brandId.
         */
        get: operations["reportTickets"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/reports/ticket_events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ticket history
         * @description Each change to a ticket, one row per field changed: state, priority, assignee, team, tags, type and the rest, by whom and when. For time-in-state and handling analysis. Messages, ratings and missed targets are in the conversations dataset. Teammates appear by name in the values they changed; customers’ email addresses and phone numbers in a value are masked. Rows come oldest first by `dateField` (at), then by id; keep `nextCursor` to carry on later. Every brand the key reaches, or one with brandId.
         */
        get: operations["reportTicketEvents"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/reports/reviews": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Reviews
         * @description Customer reviews from Google Business Profile and Facebook recommendations: the stars, whether and when the team answered. The reviewer’s name and words are left out. Rows come oldest first by `dateField` (createdAt, updatedAt), then by id; keep `nextCursor` to carry on later. Every brand the key reaches, or one with brandId.
         */
        get: operations["reportReviews"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/reports/posts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Posts
         * @description Each post on each account it went to: when it was scheduled and published, its labels (campaigns), format, and its latest numbers. Rows come oldest first by `dateField` (publishedAt, updatedAt), then by id; keep `nextCursor` to carry on later. Every brand the key reaches, or one with brandId.
         */
        get: operations["reportPosts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/reports/account_metrics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Account analytics by day
         * @description Each account’s numbers day by day (UTC days), as the network reported them: followers, impressions, reach, views, engagement… Within the plan’s history. Rows come oldest first by `dateField` (date), then by id; keep `nextCursor` to carry on later. Every brand the key reaches, or one with brandId.
         */
        get: operations["reportAccountMetrics"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/reports/website_ga4_days": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Website traffic from Google Analytics 4, by day
         * @description For each brand that connected a Google Analytics 4 property, its days in the brand’s timezone: sessions, new users, engaged sessions, key events and revenue (in the property’s currency). At most 92 days a read, from the property’s report (kept an hour); brands without Google Analytics have no rows. Someone who works on some networks only gets the visits their networks’ tagged links brought. Rows come oldest first by `dateField` (date), then by id; keep `nextCursor` to carry on later. Every brand the key reaches, or one with brandId.
         */
        get: operations["reportWebsiteGa4Days"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/reports/usage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Usage by day
         * @description The workspace’s usage day by day (UTC days): emails sent and how they left, bounces and complaints, API calls and their errors. Rows come oldest first by `dateField` (date), then by id; keep `nextCursor` to carry on later. The whole workspace (brandId doesn’t apply).
         */
        get: operations["reportUsage"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/reports/supervision_log": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Supervision log
         * @description Each time a supervisor watched, whispered in or joined a conversation (41.1): who, whose conversation, the modes in order, whether the customer was told, when it started and ended. Whispers’ words and coaching notes are never in it. Rows come oldest first by `dateField` (startedAt), then by id; keep `nextCursor` to carry on later. Every brand the key reaches, or one with brandId.
         */
        get: operations["reportSupervisionLog"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/reports/queue_alert_events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Queue alerts
         * @description What the supervisors’ queue alerts told (41.1b), kept 90 days: each crossing of an alert’s line and each return under it, with the value, the line and who heard. An idle teammate appears by id only. Only alerts on brands the key reaches (an alert across every brand needs a key for every brand). Rows come oldest first by `dateField` (at), then by id; keep `nextCursor` to carry on later. Every brand the key reaches, or one with brandId.
         */
        get: operations["reportQueueAlertEvents"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/known-issues": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List known issues
         * @description The known issues of the brands the key reaches, the ones on now first.
         */
        get: operations["listKnownIssues"];
        put?: never;
        /**
         * Declare a known issue
         * @description From now on, each conversation that comes in within its scope gets one reply in the customer’s language, is noted and linked to it; the website chat and the help centre show its words; the AI agent answers from them.
         */
        post: operations["declareKnownIssue"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/known-issues/{knownIssueId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a known issue
         * @description The issue, with how many conversations came in during it, by channel and by hour.
         */
        get: operations["getKnownIssue"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/known-issues/{knownIssueId}/updates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Post an update to a known issue
         * @description The words customers read from now on, everywhere. Conversations that already got the reply aren’t sent it again.
         */
        post: operations["updateKnownIssue"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/known-issues/{knownIssueId}/resolve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Resolve a known issue
         * @description The banners and replies stop. With closeTickets, the tickets it gathered that are still open are closed with one note each; with message, each customer gets a last message on their channel (never one who opted out of it or reached the campaigns’ limit).
         */
        post: operations["resolveKnownIssue"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/links": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List short links
         * @description The short links of the brands the key reaches, newest first: made by hand, through the API, or by publishing (one per address per post and account). Narrow by brand, campaign or where they came from.
         */
        get: operations["listLinks"];
        put?: never;
        /**
         * Make a short link
         * @description A short link to a web address, on the brand’s own domain when it has one verified (Agency), else on Hivenza’s address. Give a key of your own (3 to 40 lowercase letters, digits and dashes) or one is made. UTM tags are added to the destination on the way, beside its own parameters. Pro plan.
         */
        post: operations["createLink"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/links/{linkId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a short link
         * @description The link, with its clicks and visitors since it was made.
         */
        get: operations["getLink"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Change or archive a short link
         * @description Where it leads, its title, campaign and UTM tags; archived: true turns it off (it answers 410 Gone), false turns it back on. Its key and domain stay.
         */
        patch: operations["updateLink"];
        trace?: never;
    };
    "/links/{linkId}/stats": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * A short link’s clicks
         * @description Clicks and visitors day by day in the brand’s timezone (the last 28 days by default), against the period before, and by country, referring site and device. Robots and link previews are counted apart (bots). Only totals exist: nothing about a visitor is kept.
         */
        get: operations["getLinkStats"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/{conversationId}/case": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a ticket’s case status
         * @description Where the case stands in the customer’s words: its stage and what happens next, the expected time, the target when the brand shows it, the documents asked for, and the status page’s link. For a brand’s own app or site showing its signed-in customer.
         */
        get: operations["getCaseStatus"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * Set a ticket’s case stage
         * @description Moves the case to one of its type’s stages (the ticket moves to the stage’s state when it is in another, with its targets and workflows), or switches the status page off or on for this ticket. A customer who asked for updates hears of a new stage once.
         */
        patch: operations["updateCaseStatus"];
        trace?: never;
    };
    "/conversations/{conversationId}/case/documents": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Ask the customer for a document
         * @description Shown on the case’s status page, where the customer uploads it (only the kinds of file the brand takes, checked by their content, up to its size cap); each file lands on the ticket as the customer’s message. With ask, the request and the link are also sent in the conversation.
         */
        post: operations["requestCaseDocument"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/{conversationId}/case/messages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add the customer’s message to their case
         * @description What the customer wrote in the brand’s own app, as if from the status page: it lands on the ticket as theirs and the team is told.
         */
        post: operations["addCaseMessage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/supervisor/queue": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get the live queue
         * @description Every open ticket of the brands you supervise, oldest wait first: waiting (nobody has it) or in progress, who has it, and targets missed or due within the hour; with the numbers per team. Up to 1,000 tickets.
         */
        get: operations["getLiveQueue"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/supervisor/wall": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get the wall view’s numbers
         * @description What the wall screen shows: waiting, in progress, targets at risk and missed, the oldest wait, per team and in all; and how many people are answering or away.
         */
        get: operations["getWall"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/supervisor/supervisions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List the supervision log
         * @description Each time a supervisor watched, whispered in or joined a conversation, newest first: the modes in order, whether the customer was told, when it started and ended. Whispers’ words are never in it.
         */
        get: operations["listSupervisions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/supervisor/shift-report": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a shift report
         * @description What a shift (or any range up to 31 days) handled, by teammate, team and hour in the time zone you choose: handled (solved or closed), replies, first replies within or past the target each ticket had then, those with no target apart, and the median first reply.
         */
        get: operations["getShiftReport"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/supervisor/short-tomorrow": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Who’s short tomorrow
         * @description For each team with a coverage plan (or one team): tomorrow in its time zone, the stretches with fewer people planned than it needs (from the members’ working hours and leave), who is on leave, and who has no hours set.
         */
        get: operations["getShortTomorrow"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/supervisor/alerts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List queue alerts
         * @description The supervisors’ queue alerts on the brands you supervise: their kind and line, whether they are crossed now, their last value.
         */
        get: operations["listQueueAlerts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/supervisor/alerts/{queueAlertId}/events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * What a queue alert told
         * @description Each crossing of the alert’s line (told once) and each return under it, newest first, kept 90 days. An idle teammate appears by id.
         */
        get: operations["listQueueAlertEvents"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/approvals": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List approvals
         * @description The approvals asked on tickets, newest first: filter by state (pending for those waiting), kind, brand or ticket.
         */
        get: operations["listTicketApprovals"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/approvals/{approvalId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get an approval
         * @description One request: what it is for, the amount and why, who may decide it, each decision with its reason, and its state.
         */
        get: operations["getTicketApproval"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/{conversationId}/approvals": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Ask for approval on a ticket
         * @description Asks for approval of a refund, a fee waiver, a discount, an exception or a data disclosure on the ticket, with the amount and why. The workspace’s first matching approval rule (or ruleId) decides who approves, how many and by when; without a rule, name the approvers. The approvers are told in the app, on their phone, by email and in the rule’s Slack or Teams channel. One request of each kind waits on a ticket at a time.
         */
        post: operations["askTicketApproval"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/approvals/{approvalId}/decide": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Approve or refuse an approval
         * @description Decides in the name of the key’s maker (or the person an AI assistant acts for), who must be one of the approvers the request names and not the one who asked. A refusal needs a reason; one refusal refuses, and as many approvals as it needs approve it. Written to the ticket’s history and the chained activity log.
         */
        post: operations["decideTicketApproval"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/approvals/{approvalId}/withdraw": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Withdraw an approval
         * @description Withdraws a request still waiting: by the one who asked, or a supervisor. A workflow waiting on it takes its "refused" way.
         */
        post: operations["withdrawTicketApproval"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/{conversationId}/issues": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List a ticket’s linked issues
         * @description The issues of the workspace’s issue trackers (Linear, Jira) linked to the ticket, oldest link first, with each issue’s state, assignee and identifier as the tracker last said.
         */
        get: operations["listTicketIssues"];
        put?: never;
        /**
         * Link an issue to a ticket
         * @description Links an existing issue of a connected tracker to the ticket: give its identifier (ENG-123), its address, or the tracker’s id, and the provider when the workspace connected both Linear and Jira. An issue can be linked from several tickets; a ticket links up to 10. The ticket’s link is added on the issue too, and its state changes come back to the ticket.
         */
        post: operations["linkTicketIssue"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/issue-links/{issueLinkId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get an issue link
         * @description One link between a ticket and an issue.
         */
        get: operations["getTicketIssue"];
        put?: never;
        post?: never;
        /**
         * Unlink an issue from a ticket
         * @description Takes the link off: the issue stays in the tracker, the ticket’s link is taken off the issue, and the ticket’s history keeps that it was linked.
         */
        delete: operations["unlinkTicketIssue"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/issue-tracker/teams": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List the issue tracker’s teams
         * @description The teams (Linear) or projects (Jira) of a connected issue tracker, to make an issue in, and the defaults the workspace chose in its settings. Give teamId to also get that team’s labels and projects (Linear) or that project’s issue types and the site’s labels (Jira).
         */
        get: operations["listTrackerTeams"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/conversations/{conversationId}/issues/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Make an issue from a ticket
         * @description Makes an issue in a connected tracker in the team (Linear) or project (Jira) given (see listTrackerTeams), with the title, description, labels, priority and, for Jira, the issue type given (else the workspace’s default, else Bug, else Task), and links it to the ticket. Write the description for engineers (Markdown links are kept as links); the ticket’s link is added on the issue. Jira labels are words without spaces.
         */
        post: operations["createTicketIssue"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/checklists": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List checklists
         * @description The in-app checklists of the brands the key reaches, oldest first, with how many customers started, finished and closed each.
         */
        get: operations["listChecklists"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/checklists/{checklistId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a checklist and its results
         * @description One checklist, with its results for the period: started, finished and closed, how many did each step, where people stop, and the median time to finish.
         */
        get: operations["getChecklist"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/checklists/{checklistId}/start": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Start a checklist for a contact
         * @description Shows the checklist to the contact the next time they are on the brand’s site or app (on every device they are signed in on), whatever its audience says. Already started: left as it is (brought back if they had closed it). The contact must have been on the site or in the app at least once.
         */
        post: operations["startChecklist"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/contacts/{contactId}/checklists": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List a contact’s checklists
         * @description The checklists the contact started (by themselves, from a workflow or this API), newest first, with each step done and when.
         */
        get: operations["listContactChecklists"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/banners": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List banners
         * @description The in-app banners of the brands the key reaches, oldest first, with how many customers saw, closed and pressed each.
         */
        get: operations["listBanners"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/banners/{bannerId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a banner and its results
         * @description One banner, with its results for the period: customers who saw it, closed it and pressed its button, in all and day by day (the brand’s days).
         */
        get: operations["getBanner"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bookings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List bookings
         * @description The times booked in the brands the key reaches, newest first. A link sent but not used yet is not a booking. Filter by brand, status, or when (upcoming, past).
         */
        get: operations["listBookings"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bookings/{bookingId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get a booking
         * @description One booking, with who takes it, where, and the customer’s answers to the form.
         */
        get: operations["getBooking"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bookings/{bookingId}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Cancel a booking
         * @description Cancels it for the team: the time is free again, its event is taken off the host’s calendar, and the customer is told by email in their language. A group booking gives its seat back.
         */
        post: operations["cancelBooking"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        ErrorResponse: {
            error: {
                /** @enum {string} */
                type: "invalid_request" | "authentication" | "permission" | "not_found" | "conflict" | "plan" | "rate_limit" | "platform" | "server";
                /** @description Stable: safe to compare in code. */
                code: string;
                /** @description For people; may change. In French with Accept-Language: fr. */
                message: string;
                /** @description The field the error is about, when there is one. */
                param?: string;
                /** @description More about the error; validation errors list every field in details.fields. */
                details?: Record<string, never>;
                /** @description Quote it when you contact us. */
                requestId: string;
                /** Format: uri */
                docUrl: string;
            };
        };
        Workspace: {
            id: string;
            /** @constant */
            object: "workspace";
            name: string;
            slug: string;
            /** @enum {string} */
            plan: "free" | "starter" | "pro" | "agency" | "enterprise";
            trialEndsAt: string | null;
            key: {
                id: string;
                name: string;
                /** @enum {string} */
                mode: "live" | "test";
                scopes: ("brands:read" | "accounts:read" | "media:write" | "posts:read" | "posts:write" | "posts:publish" | "inbox:read" | "inbox:write" | "tickets:read" | "tickets:write" | "contacts:read" | "contacts:write" | "analytics:read" | "listening:read" | "webhooks:manage" | "workflows:read" | "workflows:write" | "knowledge:read" | "knowledge:write")[];
                /** @description The brands the key is limited to; empty for every brand. */
                brandIds: string[];
                expiresAt: string | null;
            };
            limits: {
                perMinute: number;
                perDay: number;
            };
            usage: {
                /** @description Calls by the whole workspace today (UTC), all keys together. */
                today: number;
            };
        };
        Brand: {
            id: string;
            /** @constant */
            object: "brand";
            name: string;
            slug: string;
            /** @description IANA timezone; times without an offset are read in it. */
            timezone: string;
            /** @description The workspace’s test brand (test keys only). */
            test: boolean;
            /** Format: date-time */
            createdAt: string;
        };
        Account: {
            id: string;
            /** @constant */
            object: "account";
            brandId: string;
            /** @enum {string} */
            platform: "facebook_page" | "instagram" | "threads" | "bluesky" | "linkedin" | "linkedin_page" | "youtube" | "tiktok" | "x" | "telegram" | "google_business" | "pinterest" | "discord" | "slack" | "teams";
            name: string;
            username: string | null;
            /** @enum {string} */
            status: "active" | "needs_reconnect" | "disconnected";
            /** @description False for inbox-only accounts (a Telegram bot’s private chats) and accounts that need reconnecting. */
            canPublish: boolean;
            /** @description The most characters a post’s text can have on this network. */
            textMax: number;
            formats: ("feed" | "reel" | "story" | "carousel")[];
            /** @description A simulated account of the test brand. */
            test: boolean;
            /** Format: date-time */
            createdAt: string;
        };
        YoutubePlaylist: {
            id: string;
            /** @constant */
            object: "youtube_playlist";
            title: string;
            /** @enum {string} */
            privacy: "public" | "unlisted" | "private";
            itemCount: number;
        };
        Media: {
            id: string;
            /** @constant */
            object: "media";
            brandId: string;
            filename: string;
            mimeType: string;
            sizeBytes: number;
            width: number | null;
            height: number | null;
            durationSec: number | null;
            /**
             * @description Posts can use a file once it is ready; a post scheduled while it is uploading waits for it.
             * @enum {string}
             */
            status: "uploading" | "ready" | "rejected";
            rejectReason: string | null;
            /** @description A link to the file, valid for an hour. */
            url: string | null;
            /** @description Made or changed with AI in Hivenza (POST /media/ai-images). Networks that label AI content get it set on publish. */
            madeWithAi: boolean;
            /** @description The folder it is in (folder_…), or null for the library itself. */
            folderId: string | null;
            /** @description What the picture shows, for people who can’t see it; sent to the networks that take it. */
            altText: string | null;
            tags: string[];
            /** Format: date-time */
            createdAt: string;
        };
        MediaFromUrlsResult: {
            /** @constant */
            object: "list";
            data: {
                url: string;
                media: components["schemas"]["Media"] | null;
                error: {
                    code: string;
                    message: string;
                } | null;
            }[];
        };
        MediaShort: {
            id: string;
            /** @constant */
            object: "media";
            name: string;
            /** @enum {string} */
            type: "image" | "video" | "other";
            sizeBytes: number;
            width: number | null;
            height: number | null;
            /** @description Width to height, as "1.91:1" or "0.80:1" (4:5). */
            ratio: string | null;
            durationSec: number | null;
            folder: {
                id: string;
                name: string;
            } | null;
            /** @enum {string} */
            status: "uploading" | "ready" | "rejected";
        };
        MediaFolder: {
            id: string;
            /** @constant */
            object: "folder";
            brandId: string;
            name: string;
            /** @description Files in it that are ready. */
            count: number;
            /** Format: date-time */
            createdAt: string;
        };
        Post: {
            id: string;
            /** @constant */
            object: "post";
            brandId: string;
            slug: string;
            /** @enum {string} */
            status: "draft" | "scheduled" | "publishing" | "published" | "in_drafts" | "partially_failed" | "failed";
            approval: {
                /** @enum {string} */
                state: "pending" | "approved" | "changes_requested";
                note: string | null;
            } | null;
            /** @description Only on creating with skipInvalid: the accounts left out because the post breaks their network’s rules, and why. */
            skipped?: {
                accountId: string;
                platform: string | null;
                issues: {
                    level: string;
                    code: string;
                    field?: string | null;
                    message: string;
                    max?: number;
                    length?: number;
                    fix?: components["schemas"]["ValidationFix"];
                }[];
            }[];
            text: string;
            firstComment: string;
            /** @description The files your app added are deleted from the library once the post is published. */
            removeMediaWhenPublished: boolean;
            scheduledAt: string | null;
            labelIds: string[];
            waitingForMedia: boolean;
            variants: {
                accountId: string;
                platform: ("facebook_page" | "instagram" | "threads" | "bluesky" | "linkedin" | "linkedin_page" | "youtube" | "tiktok" | "x" | "telegram" | "google_business" | "pinterest" | "discord" | "slack" | "teams") | null;
                text: string;
                mediaIds: string[];
                /** @enum {string} */
                format: "feed" | "reel" | "story" | "carousel";
                thread?: string[];
                /** @description Telegram options: buttons, silent, pin, linkPreview, asFiles. */
                telegram?: {
                    [key: string]: unknown;
                };
                /** @description Google Business Profile options: topic, event, offer, button. */
                google?: {
                    [key: string]: unknown;
                };
                /** @description Pinterest options: board, title, link, altText. */
                pinterest?: {
                    [key: string]: unknown;
                };
                /** @description TikTok options, with `mode` as it will go out (draft: the creator’s TikTok inbox; direct: the profile), privacy, interactions, disclosure, aiGenerated and photoCover. */
                tiktok?: {
                    [key: string]: unknown;
                };
                /** @description YouTube options: who can watch the video (privacy: public, unlisted or private, required to schedule or publish, never defaulted), the AI disclosure (syntheticMedia) and the playlists the video goes into. */
                youtube?: {
                    /** @enum {string} */
                    privacy?: "public" | "unlisted" | "private";
                    syntheticMedia?: boolean;
                    playlistIds?: string[];
                };
                discord?: {
                    [key: string]: unknown;
                };
            }[];
            targets: components["schemas"]["PostTarget"][];
            /** @description The post in the Hivenza app (none on the test brand). */
            url: string | null;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            updatedAt: string;
        };
        /** @description Send these to the operation (crop_media or fit_media for an assistant): it makes a new file that fits, the original kept; then put the new id in the post. */
        ValidationFix: {
            /** @enum {string} */
            operation: "cropMedia" | "fitMedia";
            mediaId: string;
            /** @description cropMedia: the ratio to cut to; fitMedia: 9:16 to reframe a video. */
            ratio?: string;
            maxSec?: number;
            maxBytes?: number;
        };
        PostTarget: {
            accountId: string;
            /** @enum {string} */
            platform: "facebook_page" | "instagram" | "threads" | "bluesky" | "linkedin" | "linkedin_page" | "youtube" | "tiktok" | "x" | "telegram" | "google_business" | "pinterest" | "discord" | "slack" | "teams";
            /** @enum {string} */
            status: "pending" | "scheduled" | "publishing" | "published" | "in_drafts" | "failed";
            /** @description The post’s id on the network, once published. */
            externalPostId: string | null;
            permalink: string | null;
            publishedAt: string | null;
            attempts: number;
            /** @description “retryable” is tried again by Hivenza; “auth” means the account must be connected again; “permanent” means the network refused it. */
            error: {
                class: ("retryable" | "auth" | "permanent") | null;
                message: string;
            } | null;
        };
        PostInput: {
            /**
             * @description A brand_… id.
             * @example brand_3kTqM9xWvB2aLpZ8cR1dEf
             */
            brandId: string;
            /** @default  */
            text: string;
            /** @description Where it goes. Left out: the accounts in `variants`, else every account of the brand that can publish. */
            accountIds?: string[];
            /** @description Files from POST /media, in order, for every account. */
            mediaIds?: string[];
            /** @description What differs on some accounts: text, media, format, network options. */
            variants?: {
                /**
                 * @description A acct_… id.
                 * @example acct_3kTqM9xWvB2aLpZ8cR1dEf
                 */
                accountId: string;
                /** @description This account’s own text; the post’s text when left out. */
                text?: string;
                mediaIds?: string[];
                /**
                 * @description feed, reel, story or carousel; chosen from the media when left out.
                 * @enum {string}
                 */
                format?: "feed" | "reel" | "story" | "carousel";
                /** @description X: the rest of a thread, in order. */
                thread?: string[];
                /** @description Telegram options: buttons, silent, pin, linkPreview, asFiles. */
                telegram?: {
                    [key: string]: unknown;
                };
                /** @description Google Business Profile options: topic, event, offer, button. */
                google?: {
                    [key: string]: unknown;
                };
                /** @description Pinterest options: board, title, link, altText. */
                pinterest?: {
                    [key: string]: unknown;
                };
                /** @description TikTok options: mode (draft: sent to the creator’s TikTok inbox to finish and post there, the only mode until Direct Post is approved; direct: straight to the profile), and for direct: privacy, comments, duet, stitch, disclosure. */
                tiktok?: {
                    [key: string]: unknown;
                };
                /** @description YouTube options: the AI disclosure and playlists. */
                youtube?: {
                    /**
                     * @description Who can watch the video. Required to schedule or publish; there is no default.
                     * @enum {string}
                     */
                    privacy?: "public" | "unlisted" | "private";
                    /** @description The altered or synthetic content disclosure. */
                    syntheticMedia?: boolean;
                    /** @description The channel’s playlists the video goes into once published (from list_youtube_playlists). */
                    playlistIds?: string[];
                };
                discord?: {
                    [key: string]: unknown;
                };
            }[];
            firstComment?: string;
            labelIds?: string[];
            /**
             * @description Delete the files your app added (POST /media) from the library once the post is published, unless another post uses them. Never for a post that repeats.
             * @default false
             */
            removeMediaWhenPublished: boolean;
            /** @description For publish=schedule: ISO 8601, or “2026-10-14T09:30” without an offset, read in the brand’s timezone. */
            scheduledAt?: string;
            /**
             * @description When sending out (not a draft): leave out the accounts whose network’s rules the post breaks, or that need reconnecting, and send it to the rest. They are listed in `skipped`. Without it, one bad account refuses the whole post (422).
             * @default false
             */
            skipInvalid: boolean;
            /**
             * @description What happens to it: a draft (default), on the schedule at scheduledAt, in the brand’s next queue time, or out now.
             * @default draft
             * @enum {string}
             */
            publish: "draft" | "schedule" | "queue" | "now";
        };
        Validation: {
            /** @constant */
            object: "validation";
            /** @description No errors on any account (warnings don’t stop a post). */
            valid: boolean;
            accounts: {
                accountId: string;
                platform: ("facebook_page" | "instagram" | "threads" | "bluesky" | "linkedin" | "linkedin_page" | "youtube" | "tiktok" | "x" | "telegram" | "google_business" | "pinterest" | "discord" | "slack" | "teams") | null;
                issues: {
                    /** @enum {string} */
                    level: "error" | "warning";
                    code: string;
                    field: string;
                    message: string;
                    /** @description For a text that is too long (caption_too_long): the most characters this network takes, counted the way the network counts (Bluesky: characters as a reader sees them, an emoji is one; the others: UTF-16 units). */
                    max?: number;
                    /** @description For a text that is too long: how many characters it has, counted the same way as max, and as the message says. */
                    length?: number;
                    fix?: components["schemas"]["ValidationFix"];
                }[];
            }[];
        };
        PostUpdated: {
            id: string;
            /** @constant */
            object: "post";
            brandId: string;
            slug: string;
            /** @enum {string} */
            status: "draft" | "scheduled" | "publishing" | "published" | "in_drafts" | "partially_failed" | "failed";
            approval: {
                /** @enum {string} */
                state: "pending" | "approved" | "changes_requested";
                note: string | null;
            } | null;
            /** @description Only on creating with skipInvalid: the accounts left out because the post breaks their network’s rules, and why. */
            skipped?: {
                accountId: string;
                platform: string | null;
                issues: {
                    level: string;
                    code: string;
                    field?: string | null;
                    message: string;
                    max?: number;
                    length?: number;
                    fix?: components["schemas"]["ValidationFix"];
                }[];
            }[];
            text: string;
            firstComment: string;
            /** @description The files your app added are deleted from the library once the post is published. */
            removeMediaWhenPublished: boolean;
            scheduledAt: string | null;
            labelIds: string[];
            waitingForMedia: boolean;
            variants: {
                accountId: string;
                platform: ("facebook_page" | "instagram" | "threads" | "bluesky" | "linkedin" | "linkedin_page" | "youtube" | "tiktok" | "x" | "telegram" | "google_business" | "pinterest" | "discord" | "slack" | "teams") | null;
                text: string;
                mediaIds: string[];
                /** @enum {string} */
                format: "feed" | "reel" | "story" | "carousel";
                thread?: string[];
                /** @description Telegram options: buttons, silent, pin, linkPreview, asFiles. */
                telegram?: {
                    [key: string]: unknown;
                };
                /** @description Google Business Profile options: topic, event, offer, button. */
                google?: {
                    [key: string]: unknown;
                };
                /** @description Pinterest options: board, title, link, altText. */
                pinterest?: {
                    [key: string]: unknown;
                };
                /** @description TikTok options, with `mode` as it will go out (draft: the creator’s TikTok inbox; direct: the profile), privacy, interactions, disclosure, aiGenerated and photoCover. */
                tiktok?: {
                    [key: string]: unknown;
                };
                /** @description YouTube options: who can watch the video (privacy: public, unlisted or private, required to schedule or publish, never defaulted), the AI disclosure (syntheticMedia) and the playlists the video goes into. */
                youtube?: {
                    /** @enum {string} */
                    privacy?: "public" | "unlisted" | "private";
                    syntheticMedia?: boolean;
                    playlistIds?: string[];
                };
                discord?: {
                    [key: string]: unknown;
                };
            }[];
            targets: components["schemas"]["PostTarget"][];
            /** @description The post in the Hivenza app (none on the test brand). */
            url: string | null;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            updatedAt: string;
            /** @description Accounts this change took the post off (only when accountIds left them out). */
            removedAccountIds: unknown[];
            /** @description Accounts this change added (only through accountIds). */
            addedAccountIds: unknown[];
        };
        PostUpdate: {
            text?: string;
            /** @description All the accounts the post goes to, replacing the list. Left out: the accounts stay as they are. */
            accountIds?: string[];
            mediaIds?: string[];
            /** @description Changes for some accounts, merged into what each has; accounts not named are left as they are. */
            variants?: {
                /**
                 * @description A acct_… id.
                 * @example acct_3kTqM9xWvB2aLpZ8cR1dEf
                 */
                accountId: string;
                /** @description This account’s own text; the post’s text when left out. */
                text?: string;
                mediaIds?: string[];
                /**
                 * @description feed, reel, story or carousel; chosen from the media when left out.
                 * @enum {string}
                 */
                format?: "feed" | "reel" | "story" | "carousel";
                /** @description X: the rest of a thread, in order. */
                thread?: string[];
                /** @description Telegram options: buttons, silent, pin, linkPreview, asFiles. */
                telegram?: {
                    [key: string]: unknown;
                };
                /** @description Google Business Profile options: topic, event, offer, button. */
                google?: {
                    [key: string]: unknown;
                };
                /** @description Pinterest options: board, title, link, altText. */
                pinterest?: {
                    [key: string]: unknown;
                };
                /** @description TikTok options: mode (draft: sent to the creator’s TikTok inbox to finish and post there, the only mode until Direct Post is approved; direct: straight to the profile), and for direct: privacy, comments, duet, stitch, disclosure. */
                tiktok?: {
                    [key: string]: unknown;
                };
                /** @description YouTube options: the AI disclosure and playlists. */
                youtube?: {
                    /**
                     * @description Who can watch the video. Required to schedule or publish; there is no default.
                     * @enum {string}
                     */
                    privacy?: "public" | "unlisted" | "private";
                    /** @description The altered or synthetic content disclosure. */
                    syntheticMedia?: boolean;
                    /** @description The channel’s playlists the video goes into once published (from list_youtube_playlists). */
                    playlistIds?: string[];
                };
                discord?: {
                    [key: string]: unknown;
                };
            }[];
            firstComment?: string;
            labelIds?: string[];
            removeMediaWhenPublished?: boolean;
        };
        TakeDownResult: {
            post: components["schemas"]["Post"];
            requested: unknown[];
            skipped: {
                accountId: unknown;
                reason: string;
            }[];
        };
        Design: {
            id: string;
            /** @constant */
            object: "design";
            brandId: string;
            name: string;
            /** @enum {string} */
            shape: "square" | "portrait" | "story" | "landscape";
            width: number;
            height: number;
            /** @enum {string} */
            templateId: "bold-bottom" | "centered" | "offer" | "editorial" | "poster" | "top-headline" | "minimal" | "handwritten";
            /** @description The words on the design by role; null when the design has none for that role (or it is hidden). */
            words: {
                headline: string | null;
                subline: string | null;
                price: string | null;
                button: string | null;
                handle: string | null;
            };
            /**
             * @description `making` for 10–30 seconds after asking; the words can be changed meanwhile. Export once it is `ready`.
             * @enum {string}
             */
            background: "making" | "ready" | "failed" | "none";
            /** @description The background photo (no words), valid for an hour. */
            backgroundUrl: string | null;
            /** @description The picture it was last exported to. */
            mediaId: string | null;
            backgroundsLeft: number;
            copiesLeft: number;
            createdAt: string;
            updatedAt: string;
        };
        MailMethod: {
            /** @constant */
            object: "mail_method";
            brandId: string;
            /**
             * @description How the brand’s email leaves now: hivenza (Hivenza’s own sending) or the brand’s own system.
             * @enum {string}
             */
            way: "hivenza" | "microsoft" | "google" | "ses" | "smtp" | "relay";
            /** @description The brand’s own system set up, chosen or not. */
            setUp: ("microsoft" | "google" | "ses" | "smtp" | "relay") | null;
            address: string | null;
            state: ("draft" | "ready" | "failing") | null;
            chosen: boolean;
            tested: boolean;
            failingSince: string | null;
            /** @description An owner chose to send through Hivenza while the brand’s system fails. */
            throughHivenzaSince: string | null;
            /** @description Addresses the brand’s system reported as bouncing or complaining, now on the suppression list. */
            bounces: number;
        };
        Conversation: {
            id: string;
            /** @constant */
            object: "conversation";
            brandId: string;
            /** @description The ticket number within the brand (#1042). */
            number: number | null;
            /** @enum {string} */
            platform: "facebook_page" | "instagram" | "threads" | "bluesky" | "linkedin" | "linkedin_page" | "youtube" | "tiktok" | "x" | "telegram" | "google_business" | "pinterest" | "discord" | "slack" | "teams" | "app_store" | "google_play" | "trustpilot" | "yelp" | "whatsapp" | "web" | "email";
            /**
             * @description A comment thread under a post, or a private chat (messages, email, website chat).
             * @enum {string}
             */
            kind: "comment" | "message";
            /** @enum {string} */
            status: "open" | "done";
            /** @enum {string} */
            state: "open" | "pending" | "on_hold" | "solved" | "closed";
            /** @enum {string} */
            priority: "low" | "normal" | "high" | "urgent";
            ticketType: ("question" | "problem" | "incident" | "task") | null;
            tags: string[];
            assigneeId: string | null;
            teamId: string | null;
            dueAt: string | null;
            /** @description Email tickets only. */
            subject: string | null;
            participant: {
                name: string;
                username: string | null;
            };
            contactId: string | null;
            /** @description Website chat: the person’s id on your site, when your site identified them. */
            siteUserId: string | null;
            unread: boolean;
            /** Format: date-time */
            lastMessageAt: string;
            lastMessagePreview: string;
            /** @description Private chats on networks with a reply window (24 h on Messenger, Instagram, WhatsApp): replies are refused after it. */
            replyWindowEndsAt: string | null;
            origin: ("customer" | "proactive" | "outbound" | "history" | "email" | "form" | "api") | null;
            rating: {
                /** @enum {string} */
                score: "good" | "bad";
                comment: string | null;
                /** Format: date-time */
                at: string;
            } | null;
            /** @description The workspace’s own ticket fields, by key. */
            fields: {
                [key: string]: unknown;
            };
            test: boolean;
            url: string | null;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            updatedAt: string;
        };
        Message: {
            id: string;
            /** @constant */
            object: "message";
            conversationId: string;
            /** @enum {string} */
            direction: "in" | "out";
            /**
             * @description Who wrote it: the customer, a teammate (or an API key), an automatic reply, or the AI agent.
             * @enum {string}
             */
            from: "customer" | "team" | "automatic" | "ai";
            author: string;
            text: string;
            attachments: {
                type: string;
                name: string | null;
            }[];
            /** @enum {string} */
            status: "sent" | "sending" | "failed";
            error: string | null;
            deleted: boolean;
            /** Format: date-time */
            sentAt: string;
        };
        ConversationUpdate: {
            /** @enum {string} */
            status?: "open" | "done";
            /** @enum {string} */
            state?: "open" | "pending" | "on_hold" | "solved" | "closed";
            /** @description A teammate who sees the brand, or null to unassign. Refused (409 at_limit) at their limit of open tickets, or of live chats at once for a website chat. */
            assigneeId?: string | null;
            /** @description Assign past the person’s limit on purpose (an assistant acting for someone needs their role to manage the inbox); kept in the activity log. */
            overLimit?: boolean;
            teamId?: string | null;
            /** @description The whole list. */
            tags?: string[];
            addTags?: string[];
            removeTags?: string[];
            /** @enum {string} */
            priority?: "low" | "normal" | "high" | "urgent";
            ticketType?: ("question" | "problem" | "incident" | "task") | null;
            dueAt?: string | null;
            unread?: boolean;
            /** @description Ticket fields by key; null clears one. Checked against their definitions. */
            fields?: {
                [key: string]: unknown;
            };
        };
        Note: {
            id: string;
            /** @constant */
            object: "note";
            conversationId: string;
            text: string;
            authorId: string | null;
            /** Format: date-time */
            createdAt: string;
        };
        Contact: {
            id: string;
            /** @constant */
            object: "contact";
            brandId: string;
            name: string;
            emails: string[];
            phones: string[];
            tags: string[];
            fields: {
                [key: string]: string;
            };
            note: string | null;
            identities: {
                /** @enum {string} */
                platform: "facebook_page" | "instagram" | "threads" | "bluesky" | "linkedin" | "linkedin_page" | "youtube" | "tiktok" | "x" | "telegram" | "google_business" | "pinterest" | "discord" | "slack" | "teams" | "app_store" | "google_play" | "trustpilot" | "yelp" | "whatsapp" | "web" | "email";
                externalId: string;
                username: string | null;
            }[];
            lastSeenAt: string | null;
            /** @description Their lawful basis for campaigns (consent, a contract or a legitimate interest), where it came from and when. Without one, no campaign reaches them. */
            consent: {
                /** @enum {string} */
                basis: "consent" | "contract" | "legitimate_interest";
                source: string;
                /** Format: date-time */
                at: string;
            } | null;
            /** @description When they opted out of each channel (email, web, push, whatsapp), or null. */
            optOuts: {
                [key: string]: string | null;
            };
            language: string | null;
            country: string | null;
            timezone: string | null;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            updatedAt: string;
        };
        SiteUser: {
            /** @constant */
            object: "site_user";
            userId: string;
            name: string | null;
            email: string | null;
            phone: string | null;
            company: string | null;
            details: {
                key: string;
                type: string;
                value: unknown;
                from: string;
                /** Format: date-time */
                at: string;
            }[];
        };
        ListeningSearch: {
            id: string;
            /** @constant */
            object: "listening_search";
            brandId: string;
            kind: string;
            term: string;
            also: string[];
            must: string[];
            exclude: string[];
            language: string | null;
            networks: {
                platform: string;
                state: string;
                lastFetchedAt: string | null;
            }[];
            mentions: number;
            lastRefreshedAt: string | null;
            /** Format: date-time */
            createdAt: string;
        };
        Mention: {
            id: string;
            /** @constant */
            object: "mention";
            searchId: string;
            /** @enum {string} */
            platform: "x" | "bluesky" | "instagram" | "tiktok" | "mastodon" | "news" | "youtube" | "threads" | "reddit" | "lemmy" | "hackernews";
            externalId: string;
            author: {
                name: string;
                username: string | null;
            } | null;
            text: string;
            url: string | null;
            /** Format: date-time */
            postedAt: string;
            likes: number | null;
            comments: number | null;
            conversationId: string | null;
        };
        Webhook: {
            id: string;
            /** @constant */
            object: "webhook";
            url: string;
            name: string | null;
            events: ("message.received" | "conversation.created" | "conversation.done" | "contact.created" | "contact.updated" | "post.published" | "post.failed" | "rating.received" | "ticket.assigned" | "ticket.state_changed" | "ticket.sla_breached" | "request.submitted" | "message.sent" | "post.scheduled" | "post.deleted" | "media.ready" | "account.disconnected" | "mention.received" | "activity.logged" | "workflow.run_started" | "workflow.step_done" | "workflow.goal_reached" | "workflow.run_failed" | "known_issue.declared" | "known_issue.updated" | "known_issue.resolved" | "queue.alert" | "approval.asked" | "approval.decided" | "issue.linked" | "issue.changed" | "issue.unlinked" | "checklist.completed" | "booking.made" | "booking.changed" | "booking.cancelled" | "booking.missed" | "survey.answered")[];
            /** @description Only these brands’ events; empty for every brand. */
            brandIds: string[];
            enabled: boolean;
            /** @description Why Hivenza switched it off (deliveries kept failing). */
            disabledReason: string | null;
            lastDeliveryAt: string | null;
            /** Format: date-time */
            createdAt: string;
        };
        WebhookDelivery: {
            id: string;
            /** @constant */
            object: "webhook_delivery";
            eventId: string | null;
            event: string;
            /** @enum {string} */
            status: "pending" | "delivered" | "retrying" | "failed";
            attempts: number;
            responseStatus: number | null;
            error: string | null;
            durationMs: number | null;
            nextAttemptAt: string | null;
            /** Format: date-time */
            createdAt: string;
        };
        /** @description Exactly what webhooks get (the body of each delivery). */
        Event: {
            id: string;
            /** @constant */
            object: "event";
            type: string;
            apiVersion: string;
            /** Format: date-time */
            createdAt: string;
            workspace: {
                id: string;
            };
            brand: {
                id: string;
                name: string;
                slug: string;
            } | null;
            data: {
                [key: string]: unknown;
            };
            test?: boolean;
        };
        Workflow: {
            id: string;
            /** @constant */
            object: "workflow";
            /**
             * @description A campaign (37.14) reaches the people of an audience; its runs are contacts.
             * @enum {string}
             */
            kind: "workflow" | "campaign";
            name: string;
            description: string | null;
            /** @enum {string} */
            state: "draft" | "live" | "paused";
            trigger: string | null;
            liveVersion: number | null;
            /** @description Changes not published yet, when there are some. */
            draftVersion: number | null;
            /** @description Send it back with a draft or a publish: a change saved since is refused (409 workflow_stale). */
            revision: number;
            awaitingApproval: boolean;
            stats: {
                started: number;
                finished: number;
                goal: number;
                failed: number;
                lastRunAt: string | null;
            };
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            updatedAt: string;
        };
        WorkflowRun: {
            id: string;
            /** @constant */
            object: "workflow_run";
            workflowId: string;
            version: number;
            /** @enum {string} */
            status: "running" | "waiting" | "done" | "goal" | "exited" | "failed" | "cancelled";
            outcome: string | null;
            conversationId: string | null;
            contactId: string | null;
            waiting: {
                kind: string;
                until: string | null;
            } | null;
            /** Format: date-time */
            startedAt: string;
            endedAt: string | null;
        };
        KnowledgeSource: {
            id: string;
            /** @constant */
            object: "knowledge_source";
            /** @enum {string} */
            kind: "file" | "url" | "site" | "sitemap" | "text" | "qa" | "help" | "tickets";
            name: string;
            enabled: boolean;
            /**
             * @description customers: the AI agent may quote it to customers; internal: the team’s AI only (suggested replies, notes).
             * @enum {string}
             */
            audience: "customers" | "internal";
            /** @description The brands it answers for; empty: every brand. */
            brandIds: string[];
            /** @enum {string} */
            status: "queued" | "processing" | "ready" | "failed";
            error: string | null;
            web: {
                url: string;
                depth: number;
                maxPages: number;
                include: string[];
                exclude: string[];
                /** @enum {string} */
                recrawl: "never" | "daily" | "weekly" | "monthly";
                nextAt: string | null;
            } | null;
            qa: {
                id: string;
                question: string;
                answer: string;
            }[] | null;
            stats: {
                pages: number;
                pieces: number;
                chars: number;
                failedPages: number;
            };
            instructions: string | null;
            /** @description While it is read: where it stands. Null otherwise. */
            progress: {
                /** @enum {string} */
                phase: "robots" | "finding" | "reading" | "pieces" | "embedding" | "saving";
                pagesFound: number;
                pagesRead: number;
                pagesFailed: number;
                pieces: number;
                credits: number;
                currentUrl: string | null;
                /** Format: date-time */
                startedAt: string;
            } | null;
            /** @description What the last finished read did. */
            lastRead: {
                pages: number;
                pieces: number;
                failedPages: number;
                seconds: number;
                credits: number;
                stopped: boolean;
                /** Format: date-time */
                finishedAt: string;
            } | null;
            indexedAt: string | null;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            updatedAt: string;
        };
        ReportDataset: {
            /** @constant */
            object: "report_dataset";
            /** @example tickets */
            name: string;
            /** @example Tickets */
            title: string;
            /** @example The private conversations the support desk handles… */
            description: string;
            /** @example /v1/reports/tickets */
            path: string;
            /** @example tickets:read */
            scope: string;
            brandScoped: boolean;
            /**
             * @example [
             *       "createdAt",
             *       "updatedAt",
             *       "solvedAt",
             *       "closedAt"
             *     ]
             */
            dateFields: string[];
            fields: {
                /** @example firstReplyMinutes */
                name: string;
                /** @enum {string} */
                type: "string" | "integer" | "number" | "boolean" | "timestamp" | "date" | "string_list" | "json";
                nullable: boolean;
                description: string;
            }[];
        };
        Report_conversations: {
            /**
             * @description The conversation (conv_…).
             * @example conv_3kTqM9xWvB2aLpZ8cR1dEf
             */
            id: string;
            /** @description The brand (brand_…). */
            brandId: string;
            /**
             * @description The number shown in the app (#1042); empty for a website chat opened before anyone wrote.
             * @example 1042
             */
            number: number | null;
            /**
             * @description The channel: email, web (the website chat), whatsapp, instagram, facebook_page, google_business and the other networks.
             * @example email
             */
            platform: string;
            /**
             * @description message (a private conversation) or comment (public comments on a post).
             * @example message
             */
            kind: string;
            /**
             * @description open or done, as the inbox shows it.
             * @example done
             */
            status: string;
            /**
             * @description The ticket state: open, pending, on_hold, solved or closed.
             * @example solved
             */
            state: string;
            /**
             * @description low, normal, high or urgent.
             * @example high
             */
            priority: string;
            /**
             * @description question, incident, problem or task.
             * @example question
             */
            ticketType: string | null;
            /**
             * @description Its tags.
             * @example [
             *       "card",
             *       "fees"
             *     ]
             */
            tags: string[];
            /** @description The person it is assigned to (user_…). */
            assigneeId: string | null;
            /** @description The team it is assigned to (team_…). */
            teamId: string | null;
            /** @description The contact (contact_…). */
            contactId: string | null;
            /**
             * @description How it started: customer (they wrote first), proactive (a proactive message), outbound (the team wrote first), email, form, api or history (imported).
             * @example customer
             */
            origin: string | null;
            /**
             * @description The customer’s language (ISO 639-1).
             * @example fr
             */
            language: string | null;
            /**
             * @description How the customer sounds: positive, neutral or negative.
             * @example neutral
             */
            sentiment: string | null;
            /**
             * Format: date-time
             * @description When it started (UTC).
             */
            createdAt: string;
            /** @description When the team first answered, by its first-reply target (UTC). */
            firstReplyAt: string | null;
            /**
             * @description Minutes from the start of the first-reply clock to the first answer, paused time left out.
             * @example 42
             */
            firstReplyMinutes: number | null;
            /** @description The customer’s last message (UTC). */
            lastInboundAt: string | null;
            /** @description The team’s last answer (UTC). */
            lastReplyAt: string | null;
            /** @description When it was last solved (UTC). */
            solvedAt: string | null;
            /**
             * @description Minutes from the start to when it was solved.
             * @example 185
             */
            resolutionMinutes: number | null;
            /** @description When it closed (UTC). */
            closedAt: string | null;
            /** @description Its due date, when set (UTC). */
            dueAt: string | null;
            /**
             * @description The name of the service-level policy applied.
             * @example Premium customers
             */
            slaPolicy: string | null;
            /** @description A target of its policy was missed (kept even once met). */
            slaBreached: boolean;
            /** @description When the first-reply target was missed (UTC). */
            firstReplyBreachedAt: string | null;
            /** @description When the resolution target was missed (UTC). */
            resolutionBreachedAt: string | null;
            /**
             * @description The customer’s rating of the answer: good or bad.
             * @example good
             */
            csat: string | null;
            /** @description When they rated it (UTC). */
            csatAt: string | null;
            /**
             * @description Answers the AI agent wrote.
             * @example 2
             */
            aiReplies: number;
            /** @description The AI agent resolved it without a person (and it wasn’t reopened). */
            aiResolved: boolean;
            /** @description The AI agent handed it to the team. */
            handedOver: boolean;
            /**
             * @description The complaint reference, when it was recorded as a complaint.
             * @example C-2026-0042
             */
            complaint: string | null;
            /**
             * @description The complaint’s category.
             * @example fees
             */
            complaintCategory: string | null;
            /**
             * @description upheld, partly_upheld, not_upheld or withdrawn.
             * @example upheld
             */
            complaintOutcome: string | null;
            /** @description When the complaint was resolved (UTC). */
            complaintResolvedAt: string | null;
            /**
             * Format: date-time
             * @description The last change of any kind (UTC): for keeping a copy in sync.
             */
            updatedAt: string;
        };
        Report_tickets: {
            /**
             * @description The conversation (conv_…).
             * @example conv_3kTqM9xWvB2aLpZ8cR1dEf
             */
            id: string;
            /** @description The brand (brand_…). */
            brandId: string;
            /**
             * @description The number shown in the app (#1042); empty for a website chat opened before anyone wrote.
             * @example 1042
             */
            number: number | null;
            /**
             * @description The channel: email, web (the website chat), whatsapp, instagram, facebook_page, google_business and the other networks.
             * @example email
             */
            platform: string;
            /**
             * @description message (a private conversation) or comment (public comments on a post).
             * @example message
             */
            kind: string;
            /**
             * @description open or done, as the inbox shows it.
             * @example done
             */
            status: string;
            /**
             * @description The ticket state: open, pending, on_hold, solved or closed.
             * @example solved
             */
            state: string;
            /**
             * @description low, normal, high or urgent.
             * @example high
             */
            priority: string;
            /**
             * @description question, incident, problem or task.
             * @example question
             */
            ticketType: string | null;
            /**
             * @description Its tags.
             * @example [
             *       "card",
             *       "fees"
             *     ]
             */
            tags: string[];
            /** @description The person it is assigned to (user_…). */
            assigneeId: string | null;
            /** @description The team it is assigned to (team_…). */
            teamId: string | null;
            /** @description The contact (contact_…). */
            contactId: string | null;
            /**
             * @description How it started: customer (they wrote first), proactive (a proactive message), outbound (the team wrote first), email, form, api or history (imported).
             * @example customer
             */
            origin: string | null;
            /**
             * @description The customer’s language (ISO 639-1).
             * @example fr
             */
            language: string | null;
            /**
             * @description How the customer sounds: positive, neutral or negative.
             * @example neutral
             */
            sentiment: string | null;
            /**
             * Format: date-time
             * @description When it started (UTC).
             */
            createdAt: string;
            /** @description When the team first answered, by its first-reply target (UTC). */
            firstReplyAt: string | null;
            /**
             * @description Minutes from the start of the first-reply clock to the first answer, paused time left out.
             * @example 42
             */
            firstReplyMinutes: number | null;
            /** @description The customer’s last message (UTC). */
            lastInboundAt: string | null;
            /** @description The team’s last answer (UTC). */
            lastReplyAt: string | null;
            /** @description When it was last solved (UTC). */
            solvedAt: string | null;
            /**
             * @description Minutes from the start to when it was solved.
             * @example 185
             */
            resolutionMinutes: number | null;
            /** @description When it closed (UTC). */
            closedAt: string | null;
            /** @description Its due date, when set (UTC). */
            dueAt: string | null;
            /**
             * @description The name of the service-level policy applied.
             * @example Premium customers
             */
            slaPolicy: string | null;
            /** @description A target of its policy was missed (kept even once met). */
            slaBreached: boolean;
            /** @description When the first-reply target was missed (UTC). */
            firstReplyBreachedAt: string | null;
            /** @description When the resolution target was missed (UTC). */
            resolutionBreachedAt: string | null;
            /**
             * @description The customer’s rating of the answer: good or bad.
             * @example good
             */
            csat: string | null;
            /** @description When they rated it (UTC). */
            csatAt: string | null;
            /**
             * @description Answers the AI agent wrote.
             * @example 2
             */
            aiReplies: number;
            /** @description The AI agent resolved it without a person (and it wasn’t reopened). */
            aiResolved: boolean;
            /** @description The AI agent handed it to the team. */
            handedOver: boolean;
            /**
             * @description The complaint reference, when it was recorded as a complaint.
             * @example C-2026-0042
             */
            complaint: string | null;
            /**
             * @description The complaint’s category.
             * @example fees
             */
            complaintCategory: string | null;
            /**
             * @description upheld, partly_upheld, not_upheld or withdrawn.
             * @example upheld
             */
            complaintOutcome: string | null;
            /** @description When the complaint was resolved (UTC). */
            complaintResolvedAt: string | null;
            /**
             * Format: date-time
             * @description The last change of any kind (UTC): for keeping a copy in sync.
             */
            updatedAt: string;
        };
        Report_ticket_events: {
            /**
             * @description The change (tev_…), with `field` unique per row.
             * @example tev_3kTqM9xWvB2aLpZ8cR1dEf
             */
            id: string;
            /** @description The ticket (conv_…). */
            conversationId: string;
            /** @description The brand (brand_…). */
            brandId: string;
            /**
             * Format: date-time
             * @description When (UTC).
             */
            at: string;
            /**
             * @description What happened: changed (a field moved), ai (AI help used), language, email_copies, agent (the AI agent took or handed over), blocked, supervision (a supervisor joined or took over) case (the case status page: opened, a refused try, an update sent) approval (an approval asked, decided, escalated, expired or withdrawn) or issue (an issue tracker’s issue linked, made, unlinked, or its state or assignee changed).
             * @example changed
             */
            kind: string;
            /**
             * @description Who: person (a teammate, or the API in their name), automation (a rule, a workflow, the AI agent) or system.
             * @example person
             */
            actorKind: string;
            /** @description The person, when a person (user_…). */
            actorId: string | null;
            /**
             * @description The field that changed (state, priority, assignee…); empty for an event without a field.
             * @example state
             */
            field: string | null;
            /**
             * @description Its value before, as people read it.
             * @example Open
             */
            from: string | null;
            /**
             * @description Its value after, as people read it.
             * @example Solved
             */
            to: string | null;
        };
        Report_reviews: {
            /**
             * @description The review’s conversation (conv_…).
             * @example conv_3kTqM9xWvB2aLpZ8cR1dEf
             */
            id: string;
            /** @description The brand (brand_…). */
            brandId: string;
            /** @description The location or page (acct_…). */
            accountId: string;
            /**
             * @description google_business, facebook_page, app_store, google_play, trustpilot or yelp.
             * @example google_business
             */
            platform: string;
            /**
             * @description Stars, 1 to 5; empty for a recommendation without stars.
             * @example 4
             */
            rating: number | null;
            /** @description positive, neutral or negative. */
            sentiment: string | null;
            /**
             * Format: date-time
             * @description When it was posted (UTC).
             */
            createdAt: string;
            /** @description The team answered it. */
            answered: boolean;
            /** @description The team’s last answer (UTC). */
            answeredAt: string | null;
            /**
             * @description Minutes from the review to the team’s answer.
             * @example 95
             */
            answerMinutes: number | null;
            /**
             * Format: date-time
             * @description The last change (UTC).
             */
            updatedAt: string;
        };
        Report_posts: {
            /**
             * @description The post on this account: postId and accountId together are unique.
             * @example post_3kTqM9xWvB2aLpZ8cR1dEf:acct_9pLm2QxTvB8aKcZ1rN4dWe
             */
            id: string;
            /** @description The post (post_…). */
            postId: string;
            /** @description The brand (brand_…). */
            brandId: string;
            /** @description The account (acct_…). */
            accountId: string;
            /**
             * @description The network.
             * @example instagram
             */
            platform: string;
            /**
             * @description On this account: pending, scheduled, publishing, published, in_drafts (sent to the network’s drafts) or failed.
             * @example published
             */
            status: string;
            /**
             * @description feed, reel, story or carousel.
             * @example reel
             */
            format: string;
            /** @description Its labels (campaigns) (label_…). */
            labelIds: string[];
            /** @description When it was scheduled for (UTC). */
            scheduledAt: string | null;
            /** @description When the network published it (UTC). */
            publishedAt: string | null;
            /**
             * @description Its address on the network.
             * @example https://www.instagram.com/p/example
             */
            permalink: string | null;
            /** @description Impressions so far, as the network reported it; empty when the network doesn't report it (never zero for "not reported"). */
            impressions: number | null;
            /** @description Reach so far, as the network reported it; empty when the network doesn't report it (never zero for "not reported"). */
            reach: number | null;
            /** @description Views so far, as the network reported it; empty when the network doesn't report it (never zero for "not reported"). */
            views: number | null;
            /** @description Likes so far, as the network reported it; empty when the network doesn't report it (never zero for "not reported"). */
            likes: number | null;
            /** @description Comments so far, as the network reported it; empty when the network doesn't report it (never zero for "not reported"). */
            comments: number | null;
            /** @description Shares so far, as the network reported it; empty when the network doesn't report it (never zero for "not reported"). */
            shares: number | null;
            /** @description Saves so far, as the network reported it; empty when the network doesn't report it (never zero for "not reported"). */
            saves: number | null;
            /** @description Clicks so far, as the network reported it; empty when the network doesn't report it (never zero for "not reported"). */
            clicks: number | null;
            /** @description Followers so far, as the network reported it; empty when the network doesn't report it (never zero for "not reported"). */
            followers: number | null;
            /** @description Engagements so far, as the network reported it; empty when the network doesn't report it (never zero for "not reported"). */
            engagements: number | null;
            /** @description Every metric the network reported, by name. */
            metrics: {
                [key: string]: number;
            };
            /** @description The day of the numbers (UTC). */
            metricsDate: string | null;
            /**
             * Format: date-time
             * @description When it was planned for this account (UTC).
             */
            createdAt: string;
            /**
             * Format: date-time
             * @description The last change (UTC).
             */
            updatedAt: string;
        };
        Report_account_metrics: {
            /**
             * @description accountId and date together.
             * @example acct_9pLm2QxTvB8aKcZ1rN4dWe:2026-10-14
             */
            id: string;
            /** @description The account (acct_…). */
            accountId: string;
            /** @description The brand (brand_…). */
            brandId: string;
            /**
             * @description The network.
             * @example instagram
             */
            platform: string;
            /**
             * Format: date
             * @description The day (UTC).
             */
            date: string;
            /** @description Impressions that day, as the network reported it; empty when the network doesn't report it (never zero for "not reported"). */
            impressions: number | null;
            /** @description Reach that day, as the network reported it; empty when the network doesn't report it (never zero for "not reported"). */
            reach: number | null;
            /** @description Views that day, as the network reported it; empty when the network doesn't report it (never zero for "not reported"). */
            views: number | null;
            /** @description Likes that day, as the network reported it; empty when the network doesn't report it (never zero for "not reported"). */
            likes: number | null;
            /** @description Comments that day, as the network reported it; empty when the network doesn't report it (never zero for "not reported"). */
            comments: number | null;
            /** @description Shares that day, as the network reported it; empty when the network doesn't report it (never zero for "not reported"). */
            shares: number | null;
            /** @description Saves that day, as the network reported it; empty when the network doesn't report it (never zero for "not reported"). */
            saves: number | null;
            /** @description Clicks that day, as the network reported it; empty when the network doesn't report it (never zero for "not reported"). */
            clicks: number | null;
            /** @description Followers that day, as the network reported it; empty when the network doesn't report it (never zero for "not reported"). */
            followers: number | null;
            /** @description Engagements that day, as the network reported it; empty when the network doesn't report it (never zero for "not reported"). */
            engagements: number | null;
            /** @description Every metric the network reported for the day, by name. */
            metrics: {
                [key: string]: number;
            };
        };
        Report_website_ga4_days: {
            /**
             * @description brandId and date together.
             * @example brand_9pLm2QxTvB8aKcZ1rN4dWe:2026-10-14
             */
            id: string;
            /** @description The brand (brand_…). */
            brandId: string;
            /**
             * @description The Google Analytics 4 property.
             * @example properties/123456789
             */
            property: string;
            /**
             * Format: date
             * @description The day, in the brand’s timezone.
             */
            date: string;
            /** @description Sessions on the website that day. */
            sessions: number;
            /** @description First-time users that day. */
            newUsers: number;
            /** @description Sessions that lasted, had a key event or two page views. */
            engagedSessions: number;
            /** @description Key events (conversions) that day. */
            keyEvents: number;
            /** @description Revenue Google Analytics counted that day. */
            revenue: number;
            /**
             * @description The property’s currency.
             * @example USD
             */
            currency: string | null;
        };
        Report_usage: {
            /**
             * @description The day.
             * @example 2026-10-14
             */
            id: string;
            /**
             * Format: date
             * @description The day (UTC).
             */
            date: string;
            /** @description Emails sent to customers. */
            emailsSent: number;
            /** @description Of those, sent through Hivenza’s own email provider. */
            emailsViaHivenza: number;
            /** @description Of those, sent through a brand’s own mail system (Microsoft 365, Google Workspace, its own SES, SMTP, a relay). */
            emailsViaOwnSystem: number;
            /** @description Emails that bounced for good. */
            emailsBounced: number;
            /** @description Emails marked as spam. */
            emailsComplained: number;
            /** @description Public API calls, all keys and apps. */
            apiCalls: number;
            /** @description Of those, refused (4xx). */
            apiClientErrors: number;
            /** @description Of those, failed on Hivenza’s side (5xx). */
            apiServerErrors: number;
            /** @description Calls refused for the rate limit. */
            apiThrottled: number;
        };
        Report_supervision_log: {
            /**
             * @description The supervision (sv_…).
             * @example sv_3kTqM9xWvB2aLpZ8cR1dEf
             */
            id: string;
            /** @description The conversation (conv_…). */
            conversationId: string;
            /** @description The brand (brand_…). */
            brandId: string;
            /** @description The supervisor (user_…). */
            supervisorId: string;
            /** @description The teammate whose conversation it was (user_…). */
            agentId: string;
            /**
             * @description The last mode: monitor (watching silently), whisper (writing to the teammate only) or join (in the conversation).
             * @example whisper
             */
            mode: string;
            /**
             * @description Every mode, in order.
             * @example ["monitor","whisper"]
             */
            modes: string[];
            /** @description Whether the customer was told a supervisor joined. */
            customerTold: boolean;
            /**
             * Format: date-time
             * @description When it started (UTC).
             */
            startedAt: string;
            /** @description When it ended (UTC); empty while live. */
            endedAt: string | null;
            /**
             * @description How it ended.
             * @example left
             */
            endedWhy: string | null;
        };
        Report_queue_alert_events: {
            /**
             * @description The event (qaev_…).
             * @example qaev_3kTqM9xWvB2aLpZ8cR1dEf
             */
            id: string;
            /** @description The alert (qalert_…). */
            alertId: string;
            /**
             * @description The alert’s name, as the team wrote it; empty once the alert is removed.
             * @example Support queue over 20
             */
            alertName: string | null;
            /**
             * @description waiting_above (tickets waiting), oldest_wait_above (minutes a customer waited), idle_agent (minutes a teammate was idle while work waited) or short_tomorrow (people a team is short of tomorrow).
             * @example waiting_above
             */
            alertKind: string | null;
            /**
             * @description crossed (past the line, told once) or cleared (back under it for a minute).
             * @example crossed
             */
            state: string;
            /** @description The value then, in the alert’s unit. */
            value: number;
            /** @description The alert’s line then. */
            threshold: number;
            /** @description For an idle teammate, who (user_…). */
            agentId: string | null;
            /** @description How many people were told in Hivenza. */
            told: number;
            /**
             * @description Where else it went: slack, teams, webhook.
             * @example ["slack","webhook"]
             */
            channels: string[];
            /**
             * Format: date-time
             * @description When (UTC).
             */
            at: string;
        };
        KnownIssue: {
            id: string;
            brandIds: string[];
            title: string;
            texts: {
                [key: string]: string;
            };
            scope: {
                channels: string[];
                countries: string[];
                languages: string[];
                tags: string[];
            };
            options: {
                reply: boolean;
                banner: boolean;
                helpCentre: boolean;
                aiAgent: boolean;
                excludeSla: boolean;
            };
            /** @enum {string} */
            state: "active" | "resolved";
            startedAt: string;
            updates: {
                at: string;
                texts: {
                    [key: string]: string;
                };
            }[];
            resolvedAt: string | null;
            closed: {
                count: number;
                messaged: number;
                skipped: number;
            } | null;
        };
        Link: {
            /** @constant */
            object: "link";
            /** @example link_3kTqM9xWvB2aLpZ8cR1dEf */
            id: string;
            brandId: string;
            /** @example spring-menu */
            key: string;
            /** @example https://hivenza.com/r/spring-menu */
            shortUrl: string;
            /** @description The brand’s own domain, or null for Hivenza’s address. */
            domain: string | null;
            /** @example https://www.example.com/menu */
            destination: string;
            /** @description Where a click lands: the destination with the UTM tags added (its own parameters kept). */
            finalUrl: string;
            title: string;
            utm: {
                source: string;
                medium: string;
                campaign: string;
                content: string;
                term: string;
            };
            campaign: string;
            /** @description The post it was made for, when publishing made it. */
            postId: string | null;
            accountId: string | null;
            platform: ("facebook_page" | "instagram" | "threads" | "bluesky" | "linkedin" | "linkedin_page" | "youtube" | "tiktok" | "x" | "telegram" | "google_business" | "pinterest" | "discord" | "slack" | "teams") | null;
            /** @enum {string} */
            source: "manual" | "post" | "api";
            archived: boolean;
            /** @description Every click since it was made, robots and link previews left out. */
            clicks: number;
            /** @description Visitors, each counted once a day, added up. */
            uniques: number;
            lastClickAt: string | null;
            createdAt: string;
        };
        LinkStats: {
            /** @constant */
            object: "link_stats";
            linkId: string;
            /** @description The days shown, in the brand’s timezone: from may be later than asked, when the plan’s history starts later. */
            range: {
                from: string;
                to: string;
            };
            totals: {
                clicks: number;
                uniques: number;
                bots: number;
            };
            /** @description The same number of days just before. */
            previous: {
                clicks: number;
                uniques: number;
            };
            days: {
                clicks: number;
                uniques: number;
                bots: number;
                date: string;
            }[];
            countries: {
                /** @description Two letters; XX when unknown. */
                country: string;
                clicks: number;
            }[];
            referrers: {
                /** @description The site the click came from, or "direct" (most apps send none). */
                site: string;
                clicks: number;
            }[];
            devices: {
                /** @enum {string} */
                device: "mobile" | "desktop" | "other";
                clicks: number;
            }[];
        };
        CaseStatus: {
            /** @constant */
            object: "case";
            /** @description Whether the status page can show this ticket. */
            available: boolean;
            /** @description Why not, when it can’t. */
            why: ("page_off" | "no_help_centre" | "type_off" | "ticket_off" | "no_number") | null;
            /** @description The case’s status page (it asks for the email or phone the case came from). */
            link: string | null;
            stageKey: string;
            /** @description What the customer reads, in their language; null when the page can’t show the ticket. */
            case: {
                caseId: string | null;
                number: number | null;
                label: string | null;
                subject: string | null;
                brand: string;
                timezone: string;
                done: boolean;
                stage: {
                    name: string;
                    next: string;
                    expectedHours: number | null;
                    position: number;
                    of: number;
                };
                stages: {
                    key: string;
                    name: string;
                    passed: boolean;
                    current: boolean;
                }[];
                targetAt: string | null;
                /** Format: date-time */
                openedAt: string;
                /** Format: date-time */
                updatedAt: string;
                canWrite: boolean;
                updates: {
                    offered: string[];
                    on: {
                        channel: string;
                        to: string;
                    }[];
                };
                documents: {
                    id: string;
                    name: string;
                    description: string | null;
                    /** @enum {string} */
                    state: "requested" | "received" | "cancelled";
                    kinds: ("pdf" | "jpeg" | "png" | "webp" | "heic" | "docx" | "xlsx")[];
                    /** @description The media types an upload may be, for a file picker. */
                    accept: string[];
                    maxMb: number;
                    files: {
                        name: string;
                        type: string;
                        size: number;
                        at: string | null;
                    }[];
                    /** @description It has its five files. */
                    full: boolean;
                    /** Format: date-time */
                    requestedAt: string;
                    receivedAt: string | null;
                }[];
            } | null;
        };
        Supervision: {
            id: string;
            conversationId: string;
            brandId: string;
            supervisorId: string;
            agentId: string;
            /** @enum {string} */
            mode: "monitor" | "whisper" | "join";
            modes: {
                mode: string;
                /** Format: date-time */
                at: string;
                customerTold: boolean;
            }[];
            customerTold: boolean;
            /** @enum {string} */
            state: "live" | "ended";
            /** Format: date-time */
            startedAt: string;
            endedAt: string | null;
            endedWhy: string | null;
        };
        ShiftReport: {
            /** @constant */
            object: "shift_report";
            /** Format: date-time */
            from: string;
            /** Format: date-time */
            to: string;
            timezone: string;
            /** @enum {string} */
            hourMode: "hours" | "hour_of_day";
            totals: {
                handled: number;
                replies: number;
                firstReplies: number;
                within: number;
                missed: number;
                noTarget: number;
                withinRate: number | null;
                incoming: number;
                medianFirstReplyMinutes: number | null;
            };
            agents: {
                userId: string;
                name: string;
                handled: number;
                replies: number;
                firstReplies: number;
                within: number;
                missed: number;
                noTarget: number;
                withinRate: number | null;
                medianFirstReplyMinutes: number | null;
            }[];
            teams: {
                teamId: string | null;
                name: string | null;
                incoming: number;
                handled: number;
                replies: number;
                firstReplies: number;
                within: number;
                missed: number;
                noTarget: number;
                withinRate: number | null;
            }[];
            hours: {
                hour: string;
                incoming: number;
                handled: number;
                replies: number;
                firstReplies: number;
                within: number;
                missed: number;
                noTarget: number;
                withinRate: number | null;
            }[];
        };
        ShortTomorrow: {
            teamId: string;
            name: string;
            timezone: string;
            /** @description Tomorrow in the team’s time zone (YYYY-MM-DD). */
            date: string;
            /** @description Whether the team has a coverage plan. */
            planned: boolean;
            /** @description The most people missing at any time tomorrow. */
            missing: number;
            short: {
                from: string;
                to: string;
                need: number;
                planned: number;
                missing: number;
            }[];
            /** @description Members on leave tomorrow (never why). */
            absent: {
                userId: string;
                name: string;
            }[];
            /** @description Members with no working hours set: never counted as planned. */
            noHours: {
                userId: string;
                name: string;
            }[];
        };
        QueueAlert: {
            id: string;
            name: string;
            /** @enum {string} */
            kind: "waiting_above" | "oldest_wait_above" | "idle_agent" | "short_tomorrow";
            threshold: number;
            /** @description Empty: every brand. */
            brandIds: string[];
            teamId: string | null;
            enabled: boolean;
            crossed: boolean;
            crossedAt: string | null;
            lastValue: number | null;
            checkedAt: string | null;
        };
        Approval: {
            id: string;
            /** @constant */
            object: "approval";
            conversationId: string;
            brandId: string;
            /** @enum {string} */
            kind: "refund" | "waiver" | "discount" | "exception" | "disclosure" | "other";
            /** @enum {string} */
            state: "pending" | "approved" | "refused" | "expired" | "withdrawn";
            amount: {
                value: number;
                currency: string;
            } | null;
            why: string;
            /** @description The approval rule that decided who approves (aprule_…); null when the asker named them. */
            ruleId: string | null;
            ruleName: string | null;
            /** @description Null when a workflow asked (askedByName is its name). */
            askedBy: {
                id: string;
                name: string;
            } | null;
            askedByName: string;
            /** Format: date-time */
            askedAt: string;
            approvers: {
                people: string[];
                teams: string[];
                /** @description owner, admin, or the id of a role the workspace made. */
                roles: string[];
            };
            /** @description How many different approvers must approve; one refusal refuses. */
            needed: number;
            /** Format: date-time */
            dueAt: string;
            escalatedAt: string | null;
            decisions: {
                by: {
                    id: string;
                    name: string;
                };
                /** @enum {string} */
                decision: "approve" | "refuse";
                reason: string | null;
                /** Format: date-time */
                at: string;
                via: string;
            }[];
            decidedAt: string | null;
            withdrawnAt: string | null;
            withdrawnReason: string | null;
            workflowRunId: string | null;
        };
        IssueLink: {
            id: string;
            /** @constant */
            object: "issue_link";
            conversationId: string;
            brandId: string;
            /** @enum {string} */
            provider: "linear" | "jira";
            /** @description The tracker’s own id of the issue. */
            issueId: string;
            /** @example ENG-123 */
            identifier: string;
            url: string;
            title: string;
            state: {
                /** @description As the tracker calls it. */
                name: string;
                /**
                 * @description The same six kinds for every tracker.
                 * @enum {string}
                 */
                type: "triage" | "backlog" | "unstarted" | "started" | "completed" | "canceled";
            };
            assignee: {
                name: string;
            } | null;
            team: {
                key: string;
                name: string;
            } | null;
            /** @enum {string} */
            priority: "none" | "urgent" | "high" | "normal" | "low";
            /** @description Made from this ticket (else an existing issue linked). */
            created: boolean;
            linkedBy: {
                id: string;
                name: string;
            } | null;
            linkedByName: string;
            /** Format: date-time */
            linkedAt: string;
            /** Format: date-time */
            stateChangedAt: string;
            /** Format: date-time */
            lastSyncedAt: string;
            removedAt: string | null;
        };
        Checklist: {
            id: string;
            /** @constant */
            object: "checklist";
            brandId: string;
            name: string;
            enabled: boolean;
            title: string;
            intro: string;
            steps: {
                key: string;
                title: string;
                text: string;
                button: {
                    label: string;
                    /** @enum {string} */
                    kind: "url" | "action";
                    url: string | null;
                    /** @description The name the site’s code hears with Hivenza.on("action", fn). */
                    action: string | null;
                } | null;
                completion: {
                    /** @enum {string} */
                    kind: "event" | "tick" | "link";
                    event: string | null;
                    match: {
                        key: string;
                        value: string;
                    }[];
                };
            }[];
            /** @description Starts by itself for its audience on its pages; else only from a workflow or this API. */
            autoStart: boolean;
            /** @description Who it is for. Every part that is set must hold. */
            audience: {
                /** @enum {string} */
                visitors: "everyone" | "new" | "returning";
                /** @enum {string} */
                signedIn: "any" | "signed_in" | "anonymous";
                details: {
                    key: string;
                    op: string;
                    value: string | null;
                }[];
                plans: string[];
                languages: string[];
                firstSeen: {
                    /** @enum {string} */
                    op: "within_days" | "older_than_days";
                    days: number;
                } | null;
                events: {
                    name: string;
                    did: boolean;
                    withinDays: number | null;
                }[];
                tags: string[];
            };
            pages: string[];
            where: {
                home: boolean;
                panel: boolean;
            };
            started: number;
            completed: number;
            dismissed: number;
            /** Format: date-time */
            createdAt: string;
        };
        ChecklistProgress: {
            /** @constant */
            object: "checklist_progress";
            checklistId: string;
            contactId: string | null;
            /** @enum {string} */
            via: "auto" | "workflow" | "api";
            /** Format: date-time */
            startedAt: string;
            completedAt: string | null;
            dismissedAt: string | null;
            steps: {
                key: string;
                title: string;
                done: boolean;
                doneAt: string | null;
            }[];
        };
        Banner: {
            id: string;
            /** @constant */
            object: "banner";
            brandId: string;
            name: string;
            enabled: boolean;
            text: string;
            button: {
                label: string;
                /** @enum {string} */
                kind: "url" | "action";
                url: string | null;
                /** @description The name the site’s code hears with Hivenza.on("action", fn). */
                action: string | null;
            } | null;
            dismissable: boolean;
            /** @enum {string} */
            style: "plain" | "honey" | "note";
            /** @enum {string} */
            position: "top" | "bottom";
            /** @enum {string} */
            frequency: "once" | "daily" | "until_dismissed" | "every_visit";
            onlyOpenHours: boolean;
            startsAt: string | null;
            endsAt: string | null;
            /** @description Who it is for. Every part that is set must hold. */
            audience: {
                /** @enum {string} */
                visitors: "everyone" | "new" | "returning";
                /** @enum {string} */
                signedIn: "any" | "signed_in" | "anonymous";
                details: {
                    key: string;
                    op: string;
                    value: string | null;
                }[];
                plans: string[];
                languages: string[];
                firstSeen: {
                    /** @enum {string} */
                    op: "within_days" | "older_than_days";
                    days: number;
                } | null;
                events: {
                    name: string;
                    did: boolean;
                    withinDays: number | null;
                }[];
                tags: string[];
            };
            pages: string[];
            seen: number;
            dismissed: number;
            clicked: number;
            /** Format: date-time */
            createdAt: string;
        };
        Booking: {
            /** @description A bkg_… id. */
            id: string;
            /** @constant */
            object: "booking";
            brandId: string;
            type: {
                id: string;
                /** @constant */
                object: "booking_type";
                name: string;
                slug: string;
                /** @enum {string} */
                kind: "meeting" | "callback";
                durationMin: number;
                capacity: number;
            };
            /** @enum {string} */
            status: "invited" | "booked" | "cancelled" | "missed";
            /** @enum {string} */
            kind: "meeting" | "callback";
            start: string | null;
            end: string | null;
            /** @description The customer’s time zone. */
            timezone: string | null;
            customer: {
                name: string | null;
                email: string | null;
                phone: string | null;
                contactId: string | null;
            };
            host: {
                id: string;
                name: string | null;
            } | null;
            conversationId: string | null;
            /** @description Where: a video link, an address with its map link, or the words the team wrote. */
            place: {
                text: string | null;
                url: string | null;
                /** @enum {string} */
                kind: "video" | "address" | "text" | "none";
            };
            answers: {
                key: string;
                question: string;
                answer: string;
            }[];
            notes: string | null;
            moves: number;
            /** @enum {string} */
            source: "workflow" | "link" | "team";
            cancelledBy: ("customer" | "team" | "calendar") | null;
            bookedAt: string | null;
            cancelledAt: string | null;
            createdAt: string;
        };
    };
    responses: never;
    parameters: {
        /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
        IdempotencyKey: string;
    };
    requestBodies: never;
    headers: {
        /** @description This request’s id, for the request log and support. */
        "X-Request-Id": string;
        /** @description Calls left this minute for the workspace. */
        "RateLimit-Remaining": number;
    };
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    getWorkspace: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Workspace"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listBrands: {
        parameters: {
            query?: {
                /** @description How many per page, 1 to 100. */
                limit?: number;
                /** @description nextCursor from the previous page. */
                cursor?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["Brand"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getBrand: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                brandId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Brand"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listAccounts: {
        parameters: {
            query?: {
                /** @description A brand_… id. */
                brandId?: string;
                /** @description One network or several, separated by commas (instagram,facebook_page,tiktok). */
                platform?: string;
                /** @description true: only accounts that can publish now (connected, not inbox-only). false: the ones that can’t, for a "reconnect" list. */
                canPublish?: "true" | "false";
                /** @description How many per page, 1 to 100. */
                limit?: number;
                /** @description nextCursor from the previous page. */
                cursor?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["Account"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getAccount: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                accountId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Account"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listYoutubePlaylists: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                accountId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["YoutubePlaylist"][];
                    };
                };
            };
            /**
             * @description The request has a problem (validation_failed, invalid_cursor…).
             *
             *     `not_youtube`: The account isn’t a YouTube channel.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description A conflict (idempotency_mismatch, request_in_progress, version_conflict…).
             *
             *     `youtube_reconnect`: The channel’s login needs reconnecting (or doesn’t allow playlists yet).
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description Error
             *
             *     `youtube_unavailable`: YouTube refused or couldn’t be reached.
             */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    createYoutubePlaylist: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                accountId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    title: string;
                    /** @default  */
                    description?: string;
                    /** @enum {string} */
                    privacy: "public" | "unlisted" | "private";
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["YoutubePlaylist"];
                };
            };
            /**
             * @description The request has a problem (validation_failed, invalid_cursor…).
             *
             *     `not_youtube`: The account isn’t a YouTube channel.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description A conflict (idempotency_mismatch, request_in_progress, version_conflict…).
             *
             *     `youtube_reconnect`: The channel’s login needs reconnecting (or doesn’t allow playlists yet).
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description Error
             *
             *     `youtube_unavailable`: YouTube refused or couldn’t be reached.
             */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    addToYoutubePlaylist: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                accountId: string;
                playlistId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description A post_… id.
                     * @example post_3kTqM9xWvB2aLpZ8cR1dEf
                     */
                    postId?: string;
                    videoId?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "youtube_playlist_item";
                        playlistId: string;
                        videoId: string;
                        itemId: string;
                        already: boolean;
                    };
                };
            };
            /**
             * @description The request has a problem (validation_failed, invalid_cursor…).
             *
             *     `not_youtube`: The account isn’t a YouTube channel.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description A conflict (idempotency_mismatch, request_in_progress, version_conflict…).
             *
             *     `youtube_reconnect`: The channel’s login needs reconnecting (or doesn’t allow playlists yet).
             *
             *     `not_published`: The post isn’t on YouTube yet.
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description Error
             *
             *     `youtube_unavailable`: YouTube refused or couldn’t be reached.
             */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    createUpload: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description A brand_… id.
                     * @example brand_3kTqM9xWvB2aLpZ8cR1dEf
                     */
                    brandId: string;
                    filename: string;
                    /** @enum {string} */
                    mimeType: "image/jpeg" | "image/png" | "image/webp" | "video/mp4" | "video/quicktime";
                    sizeBytes: number;
                    /**
                     * @description The library folder it goes into (folder_…). Left out: the library itself.
                     * @example folder_3kTqM9xWvB2aLpZ8cR1dEf
                     */
                    folderId?: string;
                    /**
                     * @description When a file with the same name and size is already in the brand: keep (the default) uploads this one too and names the other in duplicateOf; use answers the file already there, with no upload; refuse answers 409 duplicate_file.
                     * @enum {string}
                     */
                    ifDuplicate?: "keep" | "use" | "refuse";
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        media: components["schemas"]["Media"];
                        /** @description Null when ifDuplicate=use answered the file already there. */
                        upload: {
                            url: string;
                            /** @constant */
                            method: "PUT";
                            headers: {
                                [key: string]: string;
                            };
                        } | null;
                        /** @description A file with the same name and size already in the brand (media_…), or null. */
                        duplicateOf: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description The workspace's plan doesn't include this.
             *
             *     `plan_limit`: The workspace’s storage is full.
             */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description A conflict (idempotency_mismatch, request_in_progress, version_conflict…).
             *
             *     `duplicate_file`: With ifDuplicate=refuse: a file with the same name and size is already in the brand.
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    completeUpload: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                mediaId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    width?: number;
                    height?: number;
                    durationSec?: number;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Media"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    createMediaFromUrl: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description A brand_… id.
                     * @example brand_3kTqM9xWvB2aLpZ8cR1dEf
                     */
                    brandId: string;
                    /** Format: uri */
                    url: string;
                    filename?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Media"];
                };
            };
            /**
             * @description The request has a problem (validation_failed, invalid_cursor…).
             *
             *     `download_failed`: The address couldn’t be read, isn’t public, isn’t an image or video, or is too big.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    createMediaFromUrls: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description A brand_… id.
                     * @example brand_3kTqM9xWvB2aLpZ8cR1dEf
                     */
                    brandId: string;
                    urls: string[];
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MediaFromUrlsResult"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    generateImages: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description A brand_… id.
                     * @example brand_3kTqM9xWvB2aLpZ8cR1dEf
                     */
                    brandId: string;
                    /** @description What to make, or what to change. */
                    prompt: string;
                    style?: ("photo" | "illustration" | "flat" | "3d" | "minimal") | null;
                    /**
                     * @description square 1:1, portrait 4:5, story 9:16, landscape 16:9.
                     * @default square
                     * @enum {string}
                     */
                    shape?: "square" | "portrait" | "story" | "landscape";
                    /**
                     * @description Pictures to choose from (one when changing a picture).
                     * @default 1
                     */
                    count?: number;
                    /**
                     * @description Use the brand’s logo and its colours.
                     * @default false
                     */
                    useLogo?: boolean;
                    /**
                     * @description A picture of the brand’s to change; it is kept as it is.
                     * @example media_3kTqM9xWvB2aLpZ8cR1dEf
                     */
                    sourceMediaId?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            202: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Media"][];
                        creditsLeft: number;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description The workspace's plan doesn't include this.
             *
             *     `ai_credits`: Not enough AI credits left.
             */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description Error
             *
             *     `ai_off`: Making pictures isn’t switched on.
             */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    writeWithAi: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description A brand_… id.
                     * @example brand_3kTqM9xWvB2aLpZ8cR1dEf
                     */
                    brandId: string;
                    /**
                     * @description write: from a brief (text); the others work on text.
                     * @enum {string}
                     */
                    action: "write" | "rephrase" | "shorten" | "translate" | "hashtags";
                    /** @default  */
                    text?: string;
                    /** @enum {string} */
                    tone?: "friendly" | "professional" | "playful" | "bold";
                    /** @description Keep within this many characters. */
                    maxChars?: number;
                    /** @enum {string} */
                    language?: "en" | "fr" | "es" | "pt" | "de" | "it" | "ar" | "sw" | "ha" | "yo" | "zh";
                    /**
                     * @description Written for this network’s habits and limits.
                     * @enum {string}
                     */
                    network?: "facebook_page" | "instagram" | "threads" | "bluesky" | "linkedin" | "linkedin_page" | "youtube" | "tiktok" | "x" | "telegram" | "google_business" | "pinterest" | "discord" | "slack" | "teams";
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        text: string;
                        hashtags?: string[];
                        creditsLeft: number;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description The workspace's plan doesn't include this.
             *
             *     `ai_credits`: No AI credits left.
             */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description A conflict (idempotency_mismatch, request_in_progress, version_conflict…).
             *
             *     `ai_off`: An owner or admin switched AI off for this workspace; nothing was used.
             *
             *     `ai_paused`: Hivenza paused AI answers for now; nothing was used.
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description Error
             *
             *     `ai_unavailable`: The AI service could not answer; no credit was used.
             */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listMedia: {
        parameters: {
            query?: {
                /** @description A brand_… id. */
                brandId?: string;
                /** @description Part of the file name, any case. */
                q?: string;
                /** @description A folder_… id, or "none" for files in no folder. */
                folderId?: "none" | string;
                type?: "image" | "video";
                status?: "uploading" | "ready" | "rejected";
                /** @description full (the default): every field and a link valid for an hour; short: no links. */
                view?: "full" | "short";
                /** @description Only items changed after this moment (ISO 8601). */
                updatedAfter?: string;
                /** @description Only items created after this moment (ISO 8601). */
                createdAfter?: string;
                /** @description How many per page, 1 to 100. */
                limit?: number;
                /** @description nextCursor from the previous page. */
                cursor?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: (components["schemas"]["Media"] | components["schemas"]["MediaShort"])[];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getMedia: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                mediaId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Media"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    deleteMedia: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                mediaId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        id: string;
                        object: string;
                        /** @constant */
                        deleted: true;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description A conflict (idempotency_mismatch, request_in_progress, version_conflict…).
             *
             *     `media_in_use`: A post that hasn’t gone out yet uses it.
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    updateMedia: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                mediaId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    filename?: string;
                    altText?: string | null;
                    tags?: string[];
                    folderId?: string | null;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Media"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    cropMedia: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                mediaId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @enum {string} */
                    ratio: "1:1" | "4:5" | "1.91:1" | "9:16" | "16:9" | "2:3" | "original";
                    /** @description The part to keep, in pixels of the picture as people see it. */
                    area?: {
                        x: number;
                        y: number;
                        width: number;
                        height: number;
                    };
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Media"];
                };
            };
            /**
             * @description The request has a problem (validation_failed, invalid_cursor…).
             *
             *     `validation_error`: Not a picture, not finished uploading, its size unknown, or the area too small.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    fitMedia: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                mediaId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    maxSec?: number;
                    maxBytes?: number;
                    /** @enum {string} */
                    ratio?: "9:16";
                };
            };
        };
        responses: {
            /** @description Success */
            202: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Media"];
                };
            };
            /**
             * @description The request has a problem (validation_failed, invalid_cursor…).
             *
             *     `validation_error`: Nothing to change, a picture asked to be trimmed or reframed, or the file not finished uploading.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listMediaFolders: {
        parameters: {
            query: {
                /** @description A brand_… id. */
                brandId: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["MediaFolder"][];
                        inNoFolder: number;
                        total: number;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    createMediaFolder: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description A brand_… id.
                     * @example brand_3kTqM9xWvB2aLpZ8cR1dEf
                     */
                    brandId: string;
                    name: string;
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MediaFolder"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description A conflict (idempotency_mismatch, request_in_progress, version_conflict…).
             *
             *     `conflict`: The brand already has a folder with that name (any case).
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    deleteMediaFolder: {
        parameters: {
            query?: {
                files?: "move" | "delete";
            };
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                folderId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        id: string;
                        /** @constant */
                        object: "folder";
                        /** @constant */
                        deleted: true;
                        filesDeleted: number;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description A conflict (idempotency_mismatch, request_in_progress, version_conflict…).
             *
             *     `conflict`: With files=delete: a post that hasn’t gone out yet uses one of its files.
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    renameMediaFolder: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                folderId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MediaFolder"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description A conflict (idempotency_mismatch, request_in_progress, version_conflict…).
             *
             *     `conflict`: The brand already has a folder with that name (any case).
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listPosts: {
        parameters: {
            query?: {
                /** @description A brand_… id. */
                brandId?: string;
                status?: "draft" | "scheduled" | "publishing" | "published" | "in_drafts" | "partially_failed" | "failed";
                scheduledFrom?: string;
                scheduledTo?: string;
                /** @description Only posts to this account. */
                accountId?: string;
                /** @description Only posts with this label. */
                labelId?: string;
                /** @description Only items changed after this moment (ISO 8601). */
                updatedAfter?: string;
                /** @description Only items created after this moment (ISO 8601). */
                createdAfter?: string;
                /** @description How many per page, 1 to 100. */
                limit?: number;
                /** @description nextCursor from the previous page. */
                cursor?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["Post"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    createPost: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PostInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Post"];
                };
            };
            /**
             * @description The request has a problem (validation_failed, invalid_cursor…).
             *
             *     `account_not_in_brand`: An account isn’t one of the brand’s.
             *
             *     `media_not_in_brand`: A file isn’t in the brand’s media.
             *
             *     `time_in_past`: scheduledAt has passed.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description The workspace's plan doesn't include this.
             *
             *     `plan_limit`: The plan’s posts for the month, or a feature it doesn’t include (first comments, queues).
             */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description The key can't do this (missing_scope, ip_not_allowed, api_paused…).
             *
             *     `missing_scope`: publish other than draft needs posts:publish.
             */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description Error
             *
             *     `post_invalid`: The post breaks a network’s rules; details.validation lists each one.
             */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    validatePost: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description A brand_… id.
                     * @example brand_3kTqM9xWvB2aLpZ8cR1dEf
                     */
                    brandId: string;
                    /** @default  */
                    text?: string;
                    /** @description Where it goes. Left out: the accounts in `variants`, else every account of the brand that can publish. */
                    accountIds?: string[];
                    /** @description Files from POST /media, in order, for every account. */
                    mediaIds?: string[];
                    /** @description What differs on some accounts: text, media, format, network options. */
                    variants?: {
                        /**
                         * @description A acct_… id.
                         * @example acct_3kTqM9xWvB2aLpZ8cR1dEf
                         */
                        accountId: string;
                        /** @description This account’s own text; the post’s text when left out. */
                        text?: string;
                        mediaIds?: string[];
                        /**
                         * @description feed, reel, story or carousel; chosen from the media when left out.
                         * @enum {string}
                         */
                        format?: "feed" | "reel" | "story" | "carousel";
                        /** @description X: the rest of a thread, in order. */
                        thread?: string[];
                        /** @description Telegram options: buttons, silent, pin, linkPreview, asFiles. */
                        telegram?: {
                            [key: string]: unknown;
                        };
                        /** @description Google Business Profile options: topic, event, offer, button. */
                        google?: {
                            [key: string]: unknown;
                        };
                        /** @description Pinterest options: board, title, link, altText. */
                        pinterest?: {
                            [key: string]: unknown;
                        };
                        /** @description TikTok options: mode (draft: sent to the creator’s TikTok inbox to finish and post there, the only mode until Direct Post is approved; direct: straight to the profile), and for direct: privacy, comments, duet, stitch, disclosure. */
                        tiktok?: {
                            [key: string]: unknown;
                        };
                        /** @description YouTube options: the AI disclosure and playlists. */
                        youtube?: {
                            /**
                             * @description Who can watch the video. Required to schedule or publish; there is no default.
                             * @enum {string}
                             */
                            privacy?: "public" | "unlisted" | "private";
                            /** @description The altered or synthetic content disclosure. */
                            syntheticMedia?: boolean;
                            /** @description The channel’s playlists the video goes into once published (from list_youtube_playlists). */
                            playlistIds?: string[];
                        };
                        discord?: {
                            [key: string]: unknown;
                        };
                    }[];
                    /**
                     * @description Delete the files your app added (POST /media) from the library once the post is published, unless another post uses them. Never for a post that repeats.
                     * @default false
                     */
                    removeMediaWhenPublished?: boolean;
                    /**
                     * @description When sending out (not a draft): leave out the accounts whose network’s rules the post breaks, or that need reconnecting, and send it to the rest. They are listed in `skipped`. Without it, one bad account refuses the whole post (422).
                     * @default false
                     */
                    skipInvalid?: boolean;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Validation"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getPost: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                postId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Post"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    deletePost: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                postId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        id: string;
                        object: string;
                        /** @constant */
                        deleted: true;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    updatePost: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                postId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PostUpdate"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PostUpdated"];
                };
            };
            /**
             * @description The request has a problem (validation_failed, invalid_cursor…).
             *
             *     `account_not_in_brand`: An account isn’t one of the brand’s.
             *
             *     `media_not_in_brand`: A file isn’t in the brand’s media.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description The workspace's plan doesn't include this.
             *
             *     `plan_limit`: The plan’s posts for the month, or a feature it doesn’t include (first comments, queues).
             */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description The key can't do this (missing_scope, ip_not_allowed, api_paused…).
             *
             *     `missing_scope`: publish other than draft needs posts:publish.
             */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description A conflict (idempotency_mismatch, request_in_progress, version_conflict…).
             *
             *     `post_locked`: It is published, or being published.
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description Error
             *
             *     `post_invalid`: The post breaks a network’s rules; details.validation lists each one.
             */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    decideApproval: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                postId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @enum {string} */
                    decision: "approve" | "changes";
                    /** @description Why changes are needed, or a word with the approval. */
                    note?: string;
                    /**
                     * Format: date-time
                     * @description Approve for this time instead of the one asked for.
                     */
                    scheduledAt?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Post"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description The key can't do this (missing_scope, ip_not_allowed, api_paused…).
             *
             *     `permission`: Your role doesn’t approve posts.
             */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description A conflict (idempotency_mismatch, request_in_progress, version_conflict…).
             *
             *     `not_waiting`: The post isn’t waiting for approval.
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    takePostDown: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                postId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description Left out: every account it can be deleted from. */
                    accountIds?: string[];
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TakeDownResult"];
                };
            };
            /**
             * @description The request has a problem (validation_failed, invalid_cursor…).
             *
             *     `nothing_to_remove`: The post isn’t published anywhere it can be deleted from.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description A conflict (idempotency_mismatch, request_in_progress, version_conflict…).
             *
             *     `post_locked`: It is being published, or already being deleted.
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    schedulePost: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                postId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description ISO 8601, or without an offset in the brand’s timezone. */
                    scheduledAt: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Post"];
                };
            };
            /**
             * @description The request has a problem (validation_failed, invalid_cursor…).
             *
             *     `time_in_past`: scheduledAt has passed.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description The workspace's plan doesn't include this.
             *
             *     `plan_limit`: The plan’s posts for the month, or a feature it doesn’t include (first comments, queues).
             */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description The key can't do this (missing_scope, ip_not_allowed, api_paused…).
             *
             *     `missing_scope`: publish other than draft needs posts:publish.
             */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description Error
             *
             *     `post_invalid`: The post breaks a network’s rules; details.validation lists each one.
             */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    queuePost: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                postId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Post"];
                };
            };
            /**
             * @description The request has a problem (validation_failed, invalid_cursor…).
             *
             *     `time_in_past`: scheduledAt has passed.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description The workspace's plan doesn't include this.
             *
             *     `plan_limit`: The plan’s posts for the month, or a feature it doesn’t include (first comments, queues).
             */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description The key can't do this (missing_scope, ip_not_allowed, api_paused…).
             *
             *     `missing_scope`: publish other than draft needs posts:publish.
             */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description Error
             *
             *     `post_invalid`: The post breaks a network’s rules; details.validation lists each one.
             */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    publishPost: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                postId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Post"];
                };
            };
            /**
             * @description The request has a problem (validation_failed, invalid_cursor…).
             *
             *     `time_in_past`: scheduledAt has passed.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description The workspace's plan doesn't include this.
             *
             *     `plan_limit`: The plan’s posts for the month, or a feature it doesn’t include (first comments, queues).
             */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description The key can't do this (missing_scope, ip_not_allowed, api_paused…).
             *
             *     `missing_scope`: publish other than draft needs posts:publish.
             */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description Error
             *
             *     `post_invalid`: The post breaks a network’s rules; details.validation lists each one.
             */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    unschedulePost: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                postId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Post"];
                };
            };
            /**
             * @description The request has a problem (validation_failed, invalid_cursor…).
             *
             *     `time_in_past`: scheduledAt has passed.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description The workspace's plan doesn't include this.
             *
             *     `plan_limit`: The plan’s posts for the month, or a feature it doesn’t include (first comments, queues).
             */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description The key can't do this (missing_scope, ip_not_allowed, api_paused…).
             *
             *     `missing_scope`: publish other than draft needs posts:publish.
             */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description Error
             *
             *     `post_invalid`: The post breaks a network’s rules; details.validation lists each one.
             */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    retryPost: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                postId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Post"];
                };
            };
            /**
             * @description The request has a problem (validation_failed, invalid_cursor…).
             *
             *     `time_in_past`: scheduledAt has passed.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description The workspace's plan doesn't include this.
             *
             *     `plan_limit`: The plan’s posts for the month, or a feature it doesn’t include (first comments, queues).
             */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description The key can't do this (missing_scope, ip_not_allowed, api_paused…).
             *
             *     `missing_scope`: publish other than draft needs posts:publish.
             */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description Error
             *
             *     `post_invalid`: The post breaks a network’s rules; details.validation lists each one.
             */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getQueue: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                brandId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "queue";
                        timezone: string;
                        slots: {
                            /** @description 1 = Monday … 7 = Sunday */
                            weekday: number;
                            time: string;
                        }[];
                        nextFreeSlot: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getBestTimes: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                brandId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "best_times";
                        timezone: string;
                        lookbackDays: number;
                        minPosts: number;
                        overall: {
                            platform: string;
                            posts: number;
                            enough: boolean;
                            slots: {
                                weekday: number;
                                hour: number;
                                posts: number;
                                lift: number;
                            }[];
                        };
                        networks: {
                            platform: string;
                            posts: number;
                            enough: boolean;
                            slots: {
                                weekday: number;
                                hour: number;
                                posts: number;
                                lift: number;
                            }[];
                        }[];
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    resetTestBrand: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "test_reset";
                        brandId: string;
                        accountsReset: number;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listDesigns: {
        parameters: {
            query?: {
                /** @description A brand_… id. */
                brandId?: string;
                /** @description How many per page, 1 to 100. */
                limit?: number;
                /** @description nextCursor from the previous page. */
                cursor?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["Design"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    createDesign: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description A brand_… id.
                     * @example brand_3kTqM9xWvB2aLpZ8cR1dEf
                     */
                    brandId: string;
                    /** @description What the design is for, in a sentence. */
                    brief: string;
                    /**
                     * @default portrait
                     * @enum {string}
                     */
                    shape?: "square" | "portrait" | "story" | "landscape";
                    /**
                     * @description Chosen for you when left out (a price picks the offer template).
                     * @enum {string}
                     */
                    templateId?: "bold-bottom" | "centered" | "offer" | "editorial" | "poster" | "top-headline" | "minimal" | "handwritten";
                    /**
                     * @description The background photo’s style.
                     * @enum {string}
                     */
                    style?: "photo" | "illustration" | "flat" | "3d" | "minimal";
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Design"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description The workspace's plan doesn't include this.
             *
             *     `ai_credits`: Not enough AI credits left for the background.
             */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description Error
             *
             *     `ai_off`: Making designs isn’t switched on.
             */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getDesign: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                designId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Design"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    updateDesign: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                designId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    words?: {
                        headline?: string;
                        subline?: string;
                        price?: string;
                        button?: string;
                        handle?: string;
                    };
                    /** @enum {string} */
                    templateId?: "bold-bottom" | "centered" | "offer" | "editorial" | "poster" | "top-headline" | "minimal" | "handwritten";
                    /** @enum {string} */
                    shape?: "square" | "portrait" | "story" | "landscape";
                    name?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Design"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    newDesignBackground: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                designId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description What the photo shows; the design’s own when left out. */
                    scene?: string;
                    /** @enum {string} */
                    style?: "photo" | "illustration" | "flat" | "3d" | "minimal";
                };
            };
        };
        responses: {
            /** @description Success */
            202: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Design"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description The workspace's plan doesn't include this.
             *
             *     `ai_credits`: Not enough AI credits left.
             */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description A conflict (idempotency_mismatch, request_in_progress, version_conflict…).
             *
             *     `busy`: A background is already being made.
             *
             *     `limit_reached`: The design has had 8 backgrounds.
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    rewriteDesignWords: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                designId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    brief?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Design"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    exportDesign: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                designId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        mediaId: string;
                        url: string | null;
                        width: number;
                        height: number;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description A conflict (idempotency_mismatch, request_in_progress, version_conflict…).
             *
             *     `not_ready`: The background is still being made.
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getBrandMailMethod: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                brandId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MailMethod"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listConversations: {
        parameters: {
            query?: {
                /** @description A brand_… id. */
                brandId?: string;
                status?: "open" | "done";
                state?: "open" | "pending" | "on_hold" | "solved" | "closed";
                platform?: "facebook_page" | "instagram" | "threads" | "bluesky" | "linkedin" | "linkedin_page" | "youtube" | "tiktok" | "x" | "telegram" | "google_business" | "pinterest" | "discord" | "slack" | "teams" | "app_store" | "google_play" | "trustpilot" | "yelp" | "whatsapp" | "web" | "email";
                /** @description A user_… id. */
                assigneeId?: string;
                /** @description A team_… id. */
                teamId?: string;
                tag?: string;
                priority?: "low" | "normal" | "high" | "urgent";
                /** @description A contact_… id. */
                contactId?: string;
                /** @description A ticket number (#1042), with brandId. */
                number?: number;
                /** @description Only items changed after this moment (ISO 8601). */
                updatedAfter?: string;
                /** @description Only items created after this moment (ISO 8601). */
                createdAfter?: string;
                /** @description How many per page, 1 to 100. */
                limit?: number;
                /** @description nextCursor from the previous page. */
                cursor?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["Conversation"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getConversation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                conversationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Conversation"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    updateConversation: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                conversationId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ConversationUpdate"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Conversation"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description A conflict (idempotency_mismatch, request_in_progress, version_conflict…).
             *
             *     `at_limit`: The assignee has reached their limit of open tickets, or of live chats at once; details give the limit and their count. Send overLimit to assign anyway.
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listMessages: {
        parameters: {
            query?: {
                /** @description How many per page, 1 to 100. */
                limit?: number;
                /** @description nextCursor from the previous page. */
                cursor?: string;
            };
            header?: never;
            path: {
                conversationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["Message"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    replyToConversation: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                conversationId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    text: string;
                    /**
                     * @description A message of the chat it answers, where the network shows it.
                     * @example msg_3kTqM9xWvB2aLpZ8cR1dEf
                     */
                    quoteMessageId?: string;
                    /** @description Email tickets: who is copied on this answer. */
                    cc?: string[];
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Message"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description A conflict (idempotency_mismatch, request_in_progress, version_conflict…).
             *
             *     `conflict`: The reply window has closed, the account is disconnected, or the channel doesn’t allow it; the message says which.
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listNotes: {
        parameters: {
            query?: {
                /** @description How many per page, 1 to 100. */
                limit?: number;
                /** @description nextCursor from the previous page. */
                cursor?: string;
            };
            header?: never;
            path: {
                conversationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["Note"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    addNote: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                conversationId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    text: string;
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Note"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getTicketHistory: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                conversationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "history";
                        entries: {
                            /** Format: date-time */
                            at: string;
                            type: string;
                            actor: {
                                kind: string;
                                name: string;
                            };
                            changes?: {
                                field: string;
                                from: unknown;
                                to: unknown;
                            }[];
                            detail?: {
                                [key: string]: unknown;
                            };
                        }[];
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listTicketFields: {
        parameters: {
            query: {
                /** @description A brand_… id. */
                brandId: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: {
                            key: string;
                            label: string;
                            type: string;
                            options: {
                                value: string;
                                label: string;
                            }[];
                            requiredToSolve: boolean;
                            onRequestForm: boolean;
                        }[];
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    createTicket: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description A brand_… id.
                     * @example brand_3kTqM9xWvB2aLpZ8cR1dEf
                     */
                    brandId: string;
                    /** @default  */
                    name?: string;
                    /** Format: email */
                    email: string;
                    subject: string;
                    description: string;
                    /** @enum {string} */
                    priority?: "low" | "normal" | "high" | "urgent";
                    /** @enum {string} */
                    ticketType?: "question" | "problem" | "incident" | "task";
                    tags?: string[];
                    /**
                     * @description A user_… id.
                     * @example user_3kTqM9xWvB2aLpZ8cR1dEf
                     */
                    assigneeId?: string;
                    /**
                     * @description A team_… id.
                     * @example team_3kTqM9xWvB2aLpZ8cR1dEf
                     */
                    teamId?: string;
                    fields?: {
                        [key: string]: unknown;
                    };
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Conversation"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description A conflict (idempotency_mismatch, request_in_progress, version_conflict…).
             *
             *     `email_channel_required`: The brand has no support email address yet.
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listContacts: {
        parameters: {
            query?: {
                /** @description A brand_… id. */
                brandId?: string;
                email?: string;
                phone?: string;
                tag?: string;
                /** @description Only items changed after this moment (ISO 8601). */
                updatedAfter?: string;
                /** @description Only items created after this moment (ISO 8601). */
                createdAfter?: string;
                /** @description How many per page, 1 to 100. */
                limit?: number;
                /** @description nextCursor from the previous page. */
                cursor?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["Contact"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    createContact: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name: string;
                    emails?: string[];
                    phones?: string[];
                    tags?: string[];
                    /** @description Your own fields (“Order number”, “City”): the whole set. */
                    fields?: {
                        [key: string]: string;
                    };
                    note?: string | null;
                    /** @description Their lawful basis for campaigns, and where it came from (your sign-up form, a contract…). null clears it. */
                    consent?: {
                        /** @enum {string} */
                        basis: "consent" | "contract" | "legitimate_interest";
                        /** @default api */
                        source?: string;
                    } | null;
                    /** @description Channels to turn off (true) or back on (false). Turning one off ends the campaigns that leave on an unsubscribe. */
                    optOuts?: {
                        email?: boolean;
                        web?: boolean;
                        push?: boolean;
                        whatsapp?: boolean;
                    };
                    language?: string | null;
                    country?: string | null;
                    timezone?: string | null;
                    /**
                     * @description A brand_… id.
                     * @example brand_3kTqM9xWvB2aLpZ8cR1dEf
                     */
                    brandId: string;
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Contact"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description A conflict (idempotency_mismatch, request_in_progress, version_conflict…).
             *
             *     `contact_exists`: A contact of the brand has that email or phone; details.contactId is it.
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getContact: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contactId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Contact"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    deleteContact: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                contactId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        id: string;
                        object: string;
                        /** @constant */
                        deleted: true;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    updateContact: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                contactId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name?: string;
                    emails?: string[];
                    phones?: string[];
                    tags?: string[];
                    /** @description Your own fields (“Order number”, “City”): the whole set. */
                    fields?: {
                        [key: string]: string;
                    };
                    note?: string | null;
                    /** @description Their lawful basis for campaigns, and where it came from (your sign-up form, a contract…). null clears it. */
                    consent?: {
                        /** @enum {string} */
                        basis: "consent" | "contract" | "legitimate_interest";
                        /** @default api */
                        source?: string;
                    } | null;
                    /** @description Channels to turn off (true) or back on (false). Turning one off ends the campaigns that leave on an unsubscribe. */
                    optOuts?: {
                        email?: boolean;
                        web?: boolean;
                        push?: boolean;
                        whatsapp?: boolean;
                    };
                    language?: string | null;
                    country?: string | null;
                    timezone?: string | null;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Contact"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listContactCampaigns: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contactId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: {
                            campaignId: string | null;
                            campaignName: string | null;
                            step: string | null;
                            channel: string | null;
                            type: string;
                            detail: string | null;
                            /** Format: date-time */
                            at: string;
                        }[];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    upsertContact: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name?: string;
                    emails?: string[];
                    phones?: string[];
                    tags?: string[];
                    /** @description Your own fields (“Order number”, “City”): the whole set. */
                    fields?: {
                        [key: string]: string;
                    };
                    note?: string | null;
                    /** @description Their lawful basis for campaigns, and where it came from (your sign-up form, a contract…). null clears it. */
                    consent?: {
                        /** @enum {string} */
                        basis: "consent" | "contract" | "legitimate_interest";
                        /** @default api */
                        source?: string;
                    } | null;
                    /** @description Channels to turn off (true) or back on (false). Turning one off ends the campaigns that leave on an unsubscribe. */
                    optOuts?: {
                        email?: boolean;
                        web?: boolean;
                        push?: boolean;
                        whatsapp?: boolean;
                    };
                    language?: string | null;
                    country?: string | null;
                    timezone?: string | null;
                    /**
                     * @description A brand_… id.
                     * @example brand_3kTqM9xWvB2aLpZ8cR1dEf
                     */
                    brandId: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "upsert";
                        created: boolean;
                        contact: components["schemas"]["Contact"];
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    mergeContacts: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                contactId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description A contact_… id.
                     * @example contact_3kTqM9xWvB2aLpZ8cR1dEf
                     */
                    fromContactId: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Contact"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    putSiteUser: {
        parameters: {
            query: {
                /** @description A brand_… id. */
                brandId: string;
            };
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                userId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name?: string;
                    /** Format: email */
                    email?: string;
                    phone?: string;
                    company?: string | null;
                    /** @description Text, numbers, true/false or ISO 8601 dates, by name. */
                    details?: {
                        [key: string]: unknown;
                    };
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SiteUser"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    deleteSiteUser: {
        parameters: {
            query: {
                /** @description A brand_… id. */
                brandId: string;
            };
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                userId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "site_user";
                        userId: string;
                        deleted: boolean;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getChatUnread: {
        parameters: {
            query: {
                /** @description A brand_… id. */
                brandId: string;
            };
            header?: never;
            path: {
                userId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "chat_unread";
                        userId: string;
                        unread: number;
                        lastAnswerAt: string | null;
                        conversationId: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    createTestConversation: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @default instagram
                     * @enum {string}
                     */
                    platform?: "facebook_page" | "instagram" | "x" | "threads" | "bluesky" | "linkedin_page" | "tiktok" | "youtube";
                    /**
                     * @default message
                     * @enum {string}
                     */
                    kind?: "message" | "comment";
                    /** @default Alex Morgan */
                    name?: string;
                    /** @default Hi! Is my order on its way? */
                    text?: string;
                    /** @description The same id again writes into the same conversation. */
                    personId?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Conversation"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getAccountAnalytics: {
        parameters: {
            query: {
                /** @description A brand_… id. */
                brandId: string;
                from: string;
                to: string;
                /** @description A acct_… id. */
                accountId?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "account_analytics";
                        /** @description The days shown: from may be later than asked, when the plan’s history starts later. */
                        range: {
                            from: string;
                            to: string;
                        };
                        historyFrom: string;
                        /** @description Each metric the network reports, by name (impressions, reach, likes, comments, shares, saves, views, followers…). Ones it doesn’t report are left out. */
                        totals: {
                            [key: string]: number;
                        };
                        /** @description Each metric the network reports, by name (impressions, reach, likes, comments, shares, saves, views, followers…). Ones it doesn’t report are left out. */
                        previous: {
                            [key: string]: number;
                        };
                        changes: {
                            [key: string]: {
                                kind: string;
                                ratio?: number;
                            };
                        };
                        engagementRate: number | null;
                        accounts: {
                            accountId: string;
                            /** @enum {string} */
                            platform: "facebook_page" | "instagram" | "threads" | "bluesky" | "linkedin" | "linkedin_page" | "youtube" | "tiktok" | "x" | "telegram" | "google_business" | "pinterest" | "discord" | "slack" | "teams";
                            name: string;
                            /** @description Each metric the network reports, by name (impressions, reach, likes, comments, shares, saves, views, followers…). Ones it doesn’t report are left out. */
                            totals: {
                                [key: string]: number;
                            };
                            engagementRate: number | null;
                            days: {
                                date: string;
                                /** @description Each metric the network reports, by name (impressions, reach, likes, comments, shares, saves, views, followers…). Ones it doesn’t report are left out. */
                                metrics: {
                                    [key: string]: number;
                                };
                            }[];
                        }[];
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getPostAnalytics: {
        parameters: {
            query: {
                /** @description A brand_… id. */
                brandId: string;
                from: string;
                to: string;
                /** @description A label_… id. */
                labelId?: string;
                /** @description A acct_… id. */
                accountId?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "post_analytics";
                        range: {
                            from: string;
                            to: string;
                        };
                        posts: {
                            postId: string;
                            accountId: string;
                            /** @enum {string} */
                            platform: "facebook_page" | "instagram" | "threads" | "bluesky" | "linkedin" | "linkedin_page" | "youtube" | "tiktok" | "x" | "telegram" | "google_business" | "pinterest" | "discord" | "slack" | "teams";
                            publishedAt: string | null;
                            permalink: string | null;
                            externalPostId: string | null;
                            text: string;
                            format: string;
                            labelIds: string[];
                            /** @description Each metric the network reports, by name (impressions, reach, likes, comments, shares, saves, views, followers…). Ones it doesn’t report are left out. */
                            metrics: {
                                [key: string]: number;
                            };
                            engagement: number;
                            engagementRate: number | null;
                        }[];
                        byLabel: {
                            labelId: string;
                            posts: number;
                            views: number | null;
                            engagements: number;
                            engagementRate: number | null;
                        }[];
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getPostInsights: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                postId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "post_insights";
                        postId: string;
                        accounts: {
                            accountId: string;
                            /** @enum {string} */
                            platform: "facebook_page" | "instagram" | "threads" | "bluesky" | "linkedin" | "linkedin_page" | "youtube" | "tiktok" | "x" | "telegram" | "google_business" | "pinterest" | "discord" | "slack" | "teams";
                            permalink: string | null;
                            /** @description Each metric the network reports, by name (impressions, reach, likes, comments, shares, saves, views, followers…). Ones it doesn’t report are left out. */
                            metrics: {
                                [key: string]: number;
                            };
                            engagement: number;
                            engagementRate: number | null;
                        }[];
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getInboxAnalytics: {
        parameters: {
            query: {
                /** @description A brand_… id. */
                brandId: string;
                from: string;
                to: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "inbox_analytics";
                        range: {
                            from: string;
                            to: string;
                        };
                        historyFrom: string;
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getWebsiteVisitors: {
        parameters: {
            query: {
                /** @description A brand_… id. */
                brandId: string;
                from: string;
                to: string;
                /** @description How the range is cut: each day, each week (from Monday), each month or each year. */
                by?: "day" | "week" | "month" | "year";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "website_visitors";
                        range: {
                            from: string;
                            to: string;
                        };
                        historyFrom: string;
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getWebsiteGa4: {
        parameters: {
            query: {
                /** @description A brand_… id. */
                brandId: string;
                from: string;
                to: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "website_ga4";
                        historyFrom: string;
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listWebsites: {
        parameters: {
            query: {
                /** @description A brand_… id. */
                brandId: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: ({
                            id: string;
                            name: string;
                            domains: string[];
                            mode: string;
                            enabled: boolean;
                            installed: boolean;
                            receiving: boolean;
                        } & {
                            [key: string]: unknown;
                        })[];
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getWebsiteOverview: {
        parameters: {
            query: {
                /** @description A brand_… id. */
                brandId: string;
                /** @description The website; left out, the one with the most visits. */
                siteId?: string;
                from: string;
                to: string;
                /** @description What the period is compared with: the equal period just before, the same days a year before, or nothing. */
                compare?: "previous" | "year" | "none";
                by?: "hour" | "day" | "week" | "month" | "year";
                source?: string;
                medium?: string;
                campaign?: string;
                term?: string;
                content?: string;
                postSlug?: string;
                postNetwork?: string;
                referrerHost?: string;
                country?: string;
                device?: "desktop" | "mobile" | "tablet";
                browser?: string;
                os?: string;
                page?: string;
                entry?: string;
                exit?: string;
                visitor?: "new" | "returning";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "website_overview";
                        range: {
                            from: string;
                            to: string;
                        };
                        historyFrom: string;
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getWebsiteJourney: {
        parameters: {
            query: {
                /** @description A brand_… id. */
                brandId: string;
                /** @description The website; left out, the one with the most visits. */
                siteId?: string;
                from: string;
                to: string;
                /** @description What the period is compared with: the equal period just before, the same days a year before, or nothing. */
                compare?: "previous" | "year" | "none";
                by?: "hour" | "day" | "week" | "month" | "year";
                source?: string;
                medium?: string;
                campaign?: string;
                term?: string;
                content?: string;
                postSlug?: string;
                postNetwork?: string;
                referrerHost?: string;
                country?: string;
                device?: "desktop" | "mobile" | "tablet";
                browser?: string;
                os?: string;
                page?: string;
                entry?: string;
                exit?: string;
                visitor?: "new" | "returning";
                dimension?: "postSlug" | "campaign" | "source";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "website_journey";
                        range: {
                            from: string;
                            to: string;
                        };
                        historyFrom: string;
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getWebsiteFunnels: {
        parameters: {
            query: {
                /** @description A brand_… id. */
                brandId: string;
                /** @description The website; left out, the one with the most visits. */
                siteId?: string;
                from: string;
                to: string;
                /** @description What the period is compared with: the equal period just before, the same days a year before, or nothing. */
                compare?: "previous" | "year" | "none";
                by?: "hour" | "day" | "week" | "month" | "year";
                source?: string;
                medium?: string;
                campaign?: string;
                term?: string;
                content?: string;
                postSlug?: string;
                postNetwork?: string;
                referrerHost?: string;
                country?: string;
                device?: "desktop" | "mobile" | "tablet";
                browser?: string;
                os?: string;
                page?: string;
                entry?: string;
                exit?: string;
                visitor?: "new" | "returning";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "website_funnels";
                        range: {
                            from: string;
                            to: string;
                        };
                        historyFrom: string;
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getSupportAnalytics: {
        parameters: {
            query: {
                /** @description A brand_… id. */
                brandId: string;
                from: string;
                to: string;
                platform?: "facebook_page" | "instagram" | "threads" | "bluesky" | "linkedin" | "linkedin_page" | "youtube" | "tiktok" | "x" | "telegram" | "google_business" | "pinterest" | "discord" | "slack" | "teams" | "app_store" | "google_play" | "trustpilot" | "yelp" | "whatsapp" | "web" | "email";
                /** @description A team_… id. */
                teamId?: string;
                priority?: "low" | "normal" | "high" | "urgent";
                type?: "question" | "problem" | "incident" | "task";
                tag?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "support_analytics";
                        range: {
                            from: string;
                            to: string;
                        };
                    } & {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listListeningSearches: {
        parameters: {
            query: {
                /** @description A brand_… id. */
                brandId: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["ListeningSearch"][];
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listMentions: {
        parameters: {
            query: {
                /** @description A brand_… id. */
                brandId: string;
                /** @description A search_… id. */
                searchId?: string;
                platform?: "x" | "bluesky" | "instagram" | "tiktok" | "mastodon" | "news" | "youtube" | "threads" | "reddit" | "lemmy" | "hackernews";
                /** @description How many per page, 1 to 100. */
                limit?: number;
                /** @description nextCursor from the previous page. */
                cursor?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["Mention"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listWebhooks: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["Webhook"][];
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    createWebhook: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** Format: uri */
                    url: string;
                    name?: string;
                    events: ("message.received" | "conversation.created" | "conversation.done" | "contact.created" | "contact.updated" | "post.published" | "post.failed" | "rating.received" | "ticket.assigned" | "ticket.state_changed" | "ticket.sla_breached" | "request.submitted" | "message.sent" | "post.scheduled" | "post.deleted" | "media.ready" | "account.disconnected" | "mention.received" | "activity.logged" | "workflow.run_started" | "workflow.step_done" | "workflow.goal_reached" | "workflow.run_failed" | "known_issue.declared" | "known_issue.updated" | "known_issue.resolved" | "queue.alert" | "approval.asked" | "approval.decided" | "issue.linked" | "issue.changed" | "issue.unlinked" | "checklist.completed" | "booking.made" | "booking.changed" | "booking.cancelled" | "booking.missed" | "survey.answered")[];
                    brandIds?: string[];
                    /** @default true */
                    enabled?: boolean;
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        webhook: components["schemas"]["Webhook"];
                        secret: string;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description The workspace's plan doesn't include this.
             *
             *     `plan_limit`: Webhooks need Pro; a workspace keeps up to 10.
             */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listWebhookEvents: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: {
                            type: string;
                            group: string;
                            label: string;
                            description: string;
                            example: {
                                [key: string]: unknown;
                            };
                        }[];
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getWebhook: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                webhookId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Webhook"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    deleteWebhook: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                webhookId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        id: string;
                        object: string;
                        /** @constant */
                        deleted: true;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    updateWebhook: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                webhookId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** Format: uri */
                    url?: string;
                    name?: string;
                    events?: ("message.received" | "conversation.created" | "conversation.done" | "contact.created" | "contact.updated" | "post.published" | "post.failed" | "rating.received" | "ticket.assigned" | "ticket.state_changed" | "ticket.sla_breached" | "request.submitted" | "message.sent" | "post.scheduled" | "post.deleted" | "media.ready" | "account.disconnected" | "mention.received" | "activity.logged" | "workflow.run_started" | "workflow.step_done" | "workflow.goal_reached" | "workflow.run_failed" | "known_issue.declared" | "known_issue.updated" | "known_issue.resolved" | "queue.alert" | "approval.asked" | "approval.decided" | "issue.linked" | "issue.changed" | "issue.unlinked" | "checklist.completed" | "booking.made" | "booking.changed" | "booking.cancelled" | "booking.missed" | "survey.answered")[];
                    brandIds?: string[];
                    /** @default true */
                    enabled?: boolean;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Webhook"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    rollWebhookSecret: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                webhookId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        secret: string;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    testWebhook: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                webhookId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @enum {string} */
                    event?: "message.received" | "conversation.created" | "conversation.done" | "contact.created" | "contact.updated" | "post.published" | "post.failed" | "rating.received" | "ticket.assigned" | "ticket.state_changed" | "ticket.sla_breached" | "request.submitted" | "message.sent" | "post.scheduled" | "post.deleted" | "media.ready" | "account.disconnected" | "mention.received" | "activity.logged" | "workflow.run_started" | "workflow.step_done" | "workflow.goal_reached" | "workflow.run_failed" | "known_issue.declared" | "known_issue.updated" | "known_issue.resolved" | "queue.alert" | "approval.asked" | "approval.decided" | "issue.linked" | "issue.changed" | "issue.unlinked" | "checklist.completed" | "booking.made" | "booking.changed" | "booking.cancelled" | "booking.missed" | "survey.answered";
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        delivered: boolean;
                        responseStatus: number | null;
                        error: string | null;
                        durationMs: number | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listWebhookDeliveries: {
        parameters: {
            query?: {
                status?: "pending" | "delivered" | "retrying" | "failed";
                /** @description How many per page, 1 to 100. */
                limit?: number;
                /** @description nextCursor from the previous page. */
                cursor?: string;
            };
            header?: never;
            path: {
                webhookId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["WebhookDelivery"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    resendWebhookDelivery: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                webhookId: string;
                deliveryId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        delivered: boolean;
                        responseStatus: number | null;
                        error: string | null;
                        durationMs: number | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listEvents: {
        parameters: {
            query?: {
                type?: "message.received" | "conversation.created" | "conversation.done" | "contact.created" | "contact.updated" | "post.published" | "post.failed" | "rating.received" | "ticket.assigned" | "ticket.state_changed" | "ticket.sla_breached" | "request.submitted" | "message.sent" | "post.scheduled" | "post.deleted" | "media.ready" | "account.disconnected" | "mention.received" | "activity.logged" | "workflow.run_started" | "workflow.step_done" | "workflow.goal_reached" | "workflow.run_failed" | "known_issue.declared" | "known_issue.updated" | "known_issue.resolved" | "queue.alert" | "approval.asked" | "approval.decided" | "issue.linked" | "issue.changed" | "issue.unlinked" | "checklist.completed" | "booking.made" | "booking.changed" | "booking.cancelled" | "booking.missed" | "survey.answered";
                /** @description A brand_… id. */
                brandId?: string;
                createdAfter?: string;
                /** @description How many per page, 1 to 100. */
                limit?: number;
                /** @description nextCursor from the previous page. */
                cursor?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["Event"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getEvent: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                eventId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Event"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listWorkflows: {
        parameters: {
            query?: {
                state?: "draft" | "live" | "paused";
                /** @description Only workflows, or only campaigns. Both when left out. */
                kind?: "workflow" | "campaign";
                cursor?: string;
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["Workflow"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    createWorkflow: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name: string;
                    description?: string;
                    /** @description The workflow as the builder keeps it: trigger, audience, entry, steps (docs/WORKFLOWS.md). Exported files have the same shape. */
                    graph?: {
                        [key: string]: unknown;
                    };
                    /**
                     * @description A campaign: its trigger is "campaign" with the brand in its settings.
                     * @default workflow
                     * @enum {string}
                     */
                    kind?: "workflow" | "campaign";
                    /**
                     * @description A campaign’s brand (its sending address, chat, app and WhatsApp number).
                     * @example brand_3kTqM9xWvB2aLpZ8cR1dEf
                     */
                    brandId?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        id: string;
                        /** @constant */
                        object: "workflow";
                        /**
                         * @description A campaign (37.14) reaches the people of an audience; its runs are contacts.
                         * @enum {string}
                         */
                        kind: "workflow" | "campaign";
                        name: string;
                        description: string | null;
                        /** @enum {string} */
                        state: "draft" | "live" | "paused";
                        trigger: string | null;
                        liveVersion: number | null;
                        /** @description Changes not published yet, when there are some. */
                        draftVersion: number | null;
                        /** @description Send it back with a draft or a publish: a change saved since is refused (409 workflow_stale). */
                        revision: number;
                        awaitingApproval: boolean;
                        stats: {
                            started: number;
                            finished: number;
                            goal: number;
                            failed: number;
                            lastRunAt: string | null;
                        };
                        /** Format: date-time */
                        createdAt: string;
                        /** Format: date-time */
                        updatedAt: string;
                        /** @description The draft when there is one, else the live version. */
                        graph: {
                            [key: string]: unknown;
                        } | null;
                        liveGraph: {
                            [key: string]: unknown;
                        } | null;
                        /** @description What blocks publishing the draft (empty: it can be published). */
                        problems: {
                            step: string | null;
                            message: string;
                        }[];
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description The workspace's plan doesn't include this.
             *
             *     `plan_limit`: Workflows need the Pro plan.
             */
            402: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getWorkflow: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workflowId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        id: string;
                        /** @constant */
                        object: "workflow";
                        /**
                         * @description A campaign (37.14) reaches the people of an audience; its runs are contacts.
                         * @enum {string}
                         */
                        kind: "workflow" | "campaign";
                        name: string;
                        description: string | null;
                        /** @enum {string} */
                        state: "draft" | "live" | "paused";
                        trigger: string | null;
                        liveVersion: number | null;
                        /** @description Changes not published yet, when there are some. */
                        draftVersion: number | null;
                        /** @description Send it back with a draft or a publish: a change saved since is refused (409 workflow_stale). */
                        revision: number;
                        awaitingApproval: boolean;
                        stats: {
                            started: number;
                            finished: number;
                            goal: number;
                            failed: number;
                            lastRunAt: string | null;
                        };
                        /** Format: date-time */
                        createdAt: string;
                        /** Format: date-time */
                        updatedAt: string;
                        /** @description The draft when there is one, else the live version. */
                        graph: {
                            [key: string]: unknown;
                        } | null;
                        liveGraph: {
                            [key: string]: unknown;
                        } | null;
                        /** @description What blocks publishing the draft (empty: it can be published). */
                        problems: {
                            step: string | null;
                            message: string;
                        }[];
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    saveWorkflowDraft: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                workflowId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description The workflow as the builder keeps it: trigger, audience, entry, steps (docs/WORKFLOWS.md). Exported files have the same shape. */
                    graph: {
                        [key: string]: unknown;
                    };
                    /** @description The revision you read; a change saved since is refused. */
                    revision?: number;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        id: string;
                        /** @constant */
                        object: "workflow";
                        /**
                         * @description A campaign (37.14) reaches the people of an audience; its runs are contacts.
                         * @enum {string}
                         */
                        kind: "workflow" | "campaign";
                        name: string;
                        description: string | null;
                        /** @enum {string} */
                        state: "draft" | "live" | "paused";
                        trigger: string | null;
                        liveVersion: number | null;
                        /** @description Changes not published yet, when there are some. */
                        draftVersion: number | null;
                        /** @description Send it back with a draft or a publish: a change saved since is refused (409 workflow_stale). */
                        revision: number;
                        awaitingApproval: boolean;
                        stats: {
                            started: number;
                            finished: number;
                            goal: number;
                            failed: number;
                            lastRunAt: string | null;
                        };
                        /** Format: date-time */
                        createdAt: string;
                        /** Format: date-time */
                        updatedAt: string;
                        /** @description The draft when there is one, else the live version. */
                        graph: {
                            [key: string]: unknown;
                        } | null;
                        liveGraph: {
                            [key: string]: unknown;
                        } | null;
                        /** @description What blocks publishing the draft (empty: it can be published). */
                        problems: {
                            step: string | null;
                            message: string;
                        }[];
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description A conflict (idempotency_mismatch, request_in_progress, version_conflict…).
             *
             *     `workflow_stale`: Someone saved it after the revision you sent.
             *
             *     `workflow_locked`: Someone is editing it in the builder right now.
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    publishWorkflow: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                workflowId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    note?: string;
                    /** @description The revision you read; a change saved since is refused. */
                    revision?: number;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        id: string;
                        /** @constant */
                        object: "workflow";
                        /**
                         * @description A campaign (37.14) reaches the people of an audience; its runs are contacts.
                         * @enum {string}
                         */
                        kind: "workflow" | "campaign";
                        name: string;
                        description: string | null;
                        /** @enum {string} */
                        state: "draft" | "live" | "paused";
                        trigger: string | null;
                        liveVersion: number | null;
                        /** @description Changes not published yet, when there are some. */
                        draftVersion: number | null;
                        /** @description Send it back with a draft or a publish: a change saved since is refused (409 workflow_stale). */
                        revision: number;
                        awaitingApproval: boolean;
                        stats: {
                            started: number;
                            finished: number;
                            goal: number;
                            failed: number;
                            lastRunAt: string | null;
                        };
                        /** Format: date-time */
                        createdAt: string;
                        /** Format: date-time */
                        updatedAt: string;
                        /** @description The draft when there is one, else the live version. */
                        graph: {
                            [key: string]: unknown;
                        } | null;
                        liveGraph: {
                            [key: string]: unknown;
                        } | null;
                        /** @description What blocks publishing the draft (empty: it can be published). */
                        problems: {
                            step: string | null;
                            message: string;
                        }[];
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description A conflict (idempotency_mismatch, request_in_progress, version_conflict…).
             *
             *     `workflow_problems`: The draft has problems to fix first (listed in the error).
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    pauseWorkflow: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                workflowId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @default false */
                    stopRunning?: boolean;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        id: string;
                        /** @constant */
                        object: "workflow";
                        /**
                         * @description A campaign (37.14) reaches the people of an audience; its runs are contacts.
                         * @enum {string}
                         */
                        kind: "workflow" | "campaign";
                        name: string;
                        description: string | null;
                        /** @enum {string} */
                        state: "draft" | "live" | "paused";
                        trigger: string | null;
                        liveVersion: number | null;
                        /** @description Changes not published yet, when there are some. */
                        draftVersion: number | null;
                        /** @description Send it back with a draft or a publish: a change saved since is refused (409 workflow_stale). */
                        revision: number;
                        awaitingApproval: boolean;
                        stats: {
                            started: number;
                            finished: number;
                            goal: number;
                            failed: number;
                            lastRunAt: string | null;
                        };
                        /** Format: date-time */
                        createdAt: string;
                        /** Format: date-time */
                        updatedAt: string;
                        /** @description The draft when there is one, else the live version. */
                        graph: {
                            [key: string]: unknown;
                        } | null;
                        liveGraph: {
                            [key: string]: unknown;
                        } | null;
                        /** @description What blocks publishing the draft (empty: it can be published). */
                        problems: {
                            step: string | null;
                            message: string;
                        }[];
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    resumeWorkflow: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                workflowId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @default false */
                    stopRunning?: boolean;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        id: string;
                        /** @constant */
                        object: "workflow";
                        /**
                         * @description A campaign (37.14) reaches the people of an audience; its runs are contacts.
                         * @enum {string}
                         */
                        kind: "workflow" | "campaign";
                        name: string;
                        description: string | null;
                        /** @enum {string} */
                        state: "draft" | "live" | "paused";
                        trigger: string | null;
                        liveVersion: number | null;
                        /** @description Changes not published yet, when there are some. */
                        draftVersion: number | null;
                        /** @description Send it back with a draft or a publish: a change saved since is refused (409 workflow_stale). */
                        revision: number;
                        awaitingApproval: boolean;
                        stats: {
                            started: number;
                            finished: number;
                            goal: number;
                            failed: number;
                            lastRunAt: string | null;
                        };
                        /** Format: date-time */
                        createdAt: string;
                        /** Format: date-time */
                        updatedAt: string;
                        /** @description The draft when there is one, else the live version. */
                        graph: {
                            [key: string]: unknown;
                        } | null;
                        liveGraph: {
                            [key: string]: unknown;
                        } | null;
                        /** @description What blocks publishing the draft (empty: it can be published). */
                        problems: {
                            step: string | null;
                            message: string;
                        }[];
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listWorkflowRuns: {
        parameters: {
            query?: {
                status?: "running" | "waiting" | "done" | "goal" | "exited" | "failed" | "cancelled";
                /** @description A wfrun_… id. */
                cursor?: string;
                limit?: number;
            };
            header?: never;
            path: {
                workflowId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["WorkflowRun"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    runWorkflow: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                workflowId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description A conv_… id.
                     * @example conv_3kTqM9xWvB2aLpZ8cR1dEf
                     */
                    conversationId?: string;
                    /**
                     * @description A contact_… id.
                     * @example contact_3kTqM9xWvB2aLpZ8cR1dEf
                     */
                    contactId?: string;
                    /** @default {} */
                    inputs?: {
                        [key: string]: string;
                    };
                };
            };
        };
        responses: {
            /** @description Success */
            202: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkflowRun"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description A conflict (idempotency_mismatch, request_in_progress, version_conflict…).
             *
             *     `conflict`: Not live, another trigger, already running there, or over its limits.
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getWorkflowRun: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                runId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        id: string;
                        /** @constant */
                        object: "workflow_run";
                        workflowId: string;
                        version: number;
                        /** @enum {string} */
                        status: "running" | "waiting" | "done" | "goal" | "exited" | "failed" | "cancelled";
                        outcome: string | null;
                        conversationId: string | null;
                        contactId: string | null;
                        waiting: {
                            kind: string;
                            until: string | null;
                        } | null;
                        /** Format: date-time */
                        startedAt: string;
                        endedAt: string | null;
                        steps: {
                            step: string;
                            type: string;
                            iteration: number;
                            status: string;
                            parts: {
                                code: string;
                                text?: string;
                                reason?: string;
                            }[];
                            error: string | null;
                            /** Format: date-time */
                            at: string;
                        }[];
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    answerAiProcedure: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                conversationId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    text: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        ok: true;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description A conflict (idempotency_mismatch, request_in_progress, version_conflict…).
             *
             *     `conflict`: No procedure waits for an answer on this conversation.
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    stopWorkflowRun: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                runId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkflowRun"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getCampaignAnalytics: {
        parameters: {
            query?: {
                /** @description The last N days (30 when left out). */
                days?: number;
            };
            header?: never;
            path: {
                workflowId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "campaign_analytics";
                        totals: {
                            [key: string]: number;
                        };
                        /** @description People, not messages: how many were sent something, and opened or clicked at least once. */
                        reach: {
                            sent: number;
                            opened: number;
                            clicked: number;
                        };
                        steps: {
                            step: string;
                            label: string | null;
                            type: string | null;
                            channel: string | null;
                            counts: {
                                [key: string]: number;
                            };
                            reasons: {
                                reason: string;
                                n: number;
                            }[];
                        }[];
                        byDay: {
                            day: string;
                            counts: {
                                [key: string]: number;
                            };
                        }[];
                        byArm: {
                            arm: string;
                            label: string;
                            counts: {
                                [key: string]: number;
                            };
                        }[];
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listCampaignPeople: {
        parameters: {
            query: {
                /** @description The last N days (30 when left out). */
                days?: number;
                type: "entered" | "sent" | "delivered" | "opened" | "clicked" | "replied" | "unsubscribed" | "skipped" | "failed" | "goal" | "exited";
                step?: string;
                /** @description The nextCursor of the page before. */
                before?: unknown;
                limit?: number;
            };
            header?: never;
            path: {
                workflowId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: {
                            contactId: string;
                            name: string | null;
                            /** Format: date-time */
                            at: string;
                            detail: string | null;
                            step: string | null;
                        }[];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listKnowledgeSources: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["KnowledgeSource"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    createKnowledgeSource: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @constant */
                    kind: "url";
                    name?: string;
                    /** @description brand_… ids; empty or left out: every brand. */
                    brandIds?: string[];
                    /** @enum {string} */
                    audience?: "customers" | "internal";
                    /** @description What the AI keeps in mind with it ("prices are in euros"). */
                    instructions?: string | null;
                    /** Format: uri */
                    url: string;
                } | {
                    /** @constant */
                    kind: "site";
                    name?: string;
                    /** @description brand_… ids; empty or left out: every brand. */
                    brandIds?: string[];
                    /** @enum {string} */
                    audience?: "customers" | "internal";
                    /** @description What the AI keeps in mind with it ("prices are in euros"). */
                    instructions?: string | null;
                    /** Format: uri */
                    url: string;
                    /** @default 2 */
                    depth?: number;
                    /** @default 50 */
                    maxPages?: number;
                    /** @default [] */
                    include?: string[];
                    /** @default [] */
                    exclude?: string[];
                    /**
                     * @default never
                     * @enum {string}
                     */
                    recrawl?: "never" | "daily" | "weekly" | "monthly";
                } | {
                    /** @constant */
                    kind: "sitemap";
                    name?: string;
                    /** @description brand_… ids; empty or left out: every brand. */
                    brandIds?: string[];
                    /** @enum {string} */
                    audience?: "customers" | "internal";
                    /** @description What the AI keeps in mind with it ("prices are in euros"). */
                    instructions?: string | null;
                    /** Format: uri */
                    url: string;
                    /** @default 50 */
                    maxPages?: number;
                    /** @default [] */
                    include?: string[];
                    /** @default [] */
                    exclude?: string[];
                    /**
                     * @default never
                     * @enum {string}
                     */
                    recrawl?: "never" | "daily" | "weekly" | "monthly";
                } | {
                    /** @constant */
                    kind: "text";
                    name: string;
                    /** @description brand_… ids; empty or left out: every brand. */
                    brandIds?: string[];
                    /** @enum {string} */
                    audience?: "customers" | "internal";
                    /** @description What the AI keeps in mind with it ("prices are in euros"). */
                    instructions?: string | null;
                    text: string;
                } | {
                    /** @constant */
                    kind: "qa";
                    name: string;
                    /** @description brand_… ids; empty or left out: every brand. */
                    brandIds?: string[];
                    /** @enum {string} */
                    audience?: "customers" | "internal";
                    /** @description What the AI keeps in mind with it ("prices are in euros"). */
                    instructions?: string | null;
                    qa: {
                        id?: string;
                        question: string;
                        answer: string;
                    }[];
                } | {
                    /** @constant */
                    kind: "help";
                    name?: string;
                    /** @description brand_… ids; empty or left out: every brand. */
                    brandIds?: string[];
                    /** @enum {string} */
                    audience?: "customers" | "internal";
                    /** @description What the AI keeps in mind with it ("prices are in euros"). */
                    instructions?: string | null;
                } | {
                    /** @constant */
                    kind: "tickets";
                    name?: string;
                    /** @description brand_… ids; empty or left out: every brand. */
                    brandIds?: string[];
                    /** @enum {string} */
                    audience?: "customers" | "internal";
                    /** @description What the AI keeps in mind with it ("prices are in euros"). */
                    instructions?: string | null;
                    days?: number;
                    max?: number;
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnowledgeSource"];
                };
            };
            /**
             * @description The request has a problem (validation_failed, invalid_cursor…).
             *
             *     `invalid_request`: A private address, or a tickets source for customers.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description A conflict (idempotency_mismatch, request_in_progress, version_conflict…).
             *
             *     `conflict`: The plan keeps no more sources.
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getKnowledgeSource: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                sourceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnowledgeSource"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    deleteKnowledgeSource: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                sourceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        id: string;
                        object: string;
                        /** @constant */
                        deleted: true;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    updateKnowledgeSource: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                sourceId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    name?: string;
                    /** @description brand_… ids; empty or left out: every brand. */
                    brandIds?: string[];
                    /** @enum {string} */
                    audience?: "customers" | "internal";
                    /** @description What the AI keeps in mind with it ("prices are in euros"). */
                    instructions?: string | null;
                    enabled?: boolean;
                    web?: {
                        /** @default 2 */
                        depth?: number;
                        /** @default 50 */
                        maxPages?: number;
                        /** @default [] */
                        include?: string[];
                        /** @default [] */
                        exclude?: string[];
                        /**
                         * @default never
                         * @enum {string}
                         */
                        recrawl?: "never" | "daily" | "weekly" | "monthly";
                    };
                    qa?: {
                        id?: string;
                        question: string;
                        answer: string;
                    }[];
                    text?: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnowledgeSource"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    refreshKnowledgeSource: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                sourceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnowledgeSource"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    searchKnowledge: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description A brand_… id.
                     * @example brand_3kTqM9xWvB2aLpZ8cR1dEf
                     */
                    brandId: string;
                    question: string;
                    /**
                     * @default customers
                     * @enum {string}
                     */
                    audience?: "customers" | "internal";
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "knowledge_search";
                        sure: boolean;
                        confidence: number;
                        pieces: {
                            sourceId: string;
                            source: string;
                            title: string;
                            url: string | null;
                            text: string;
                            score: number;
                        }[];
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listReportDatasets: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["ReportDataset"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    reportConversations: {
        parameters: {
            query?: {
                /** @description A brand_… id. */
                brandId?: string;
                /** @description From this day (UTC) or moment, included. */
                from?: string;
                /** @description Up to this day (UTC) or moment, not included. */
                to?: string;
                /** @description The date that from, to and the order use: createdAt, updatedAt, solvedAt, closedAt. */
                dateField?: "createdAt" | "updatedAt" | "solvedAt" | "closedAt";
                /** @description Rows per page, 1 to 1000. */
                limit?: number;
                /** @description nextCursor from the previous page. */
                cursor?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["Report_conversations"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    reportTickets: {
        parameters: {
            query?: {
                /** @description A brand_… id. */
                brandId?: string;
                /** @description From this day (UTC) or moment, included. */
                from?: string;
                /** @description Up to this day (UTC) or moment, not included. */
                to?: string;
                /** @description The date that from, to and the order use: createdAt, updatedAt, solvedAt, closedAt. */
                dateField?: "createdAt" | "updatedAt" | "solvedAt" | "closedAt";
                /** @description Rows per page, 1 to 1000. */
                limit?: number;
                /** @description nextCursor from the previous page. */
                cursor?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["Report_tickets"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    reportTicketEvents: {
        parameters: {
            query?: {
                /** @description A brand_… id. */
                brandId?: string;
                /** @description From this day (UTC) or moment, included. */
                from?: string;
                /** @description Up to this day (UTC) or moment, not included. */
                to?: string;
                /** @description The date that from, to and the order use: at. */
                dateField?: "at";
                /** @description Rows per page, 1 to 1000. */
                limit?: number;
                /** @description nextCursor from the previous page. */
                cursor?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["Report_ticket_events"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    reportReviews: {
        parameters: {
            query?: {
                /** @description A brand_… id. */
                brandId?: string;
                /** @description From this day (UTC) or moment, included. */
                from?: string;
                /** @description Up to this day (UTC) or moment, not included. */
                to?: string;
                /** @description The date that from, to and the order use: createdAt, updatedAt. */
                dateField?: "createdAt" | "updatedAt";
                /** @description Rows per page, 1 to 1000. */
                limit?: number;
                /** @description nextCursor from the previous page. */
                cursor?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["Report_reviews"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    reportPosts: {
        parameters: {
            query?: {
                /** @description A brand_… id. */
                brandId?: string;
                /** @description From this day (UTC) or moment, included. */
                from?: string;
                /** @description Up to this day (UTC) or moment, not included. */
                to?: string;
                /** @description The date that from, to and the order use: publishedAt, updatedAt. */
                dateField?: "publishedAt" | "updatedAt";
                /** @description Rows per page, 1 to 1000. */
                limit?: number;
                /** @description nextCursor from the previous page. */
                cursor?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["Report_posts"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    reportAccountMetrics: {
        parameters: {
            query?: {
                /** @description A brand_… id. */
                brandId?: string;
                /** @description From this day (UTC) or moment, included. */
                from?: string;
                /** @description Up to this day (UTC) or moment, not included. */
                to?: string;
                /** @description The date that from, to and the order use: date. */
                dateField?: "date";
                /** @description Rows per page, 1 to 1000. */
                limit?: number;
                /** @description nextCursor from the previous page. */
                cursor?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["Report_account_metrics"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    reportWebsiteGa4Days: {
        parameters: {
            query?: {
                /** @description A brand_… id. */
                brandId?: string;
                /** @description From this day (UTC) or moment, included. */
                from?: string;
                /** @description Up to this day (UTC) or moment, not included. */
                to?: string;
                /** @description The date that from, to and the order use: date. */
                dateField?: "date";
                /** @description Rows per page, 1 to 1000. */
                limit?: number;
                /** @description nextCursor from the previous page. */
                cursor?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["Report_website_ga4_days"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    reportUsage: {
        parameters: {
            query?: {
                /** @description From this day (UTC) or moment, included. */
                from?: string;
                /** @description Up to this day (UTC) or moment, not included. */
                to?: string;
                /** @description The date that from, to and the order use: date. */
                dateField?: "date";
                /** @description Rows per page, 1 to 1000. */
                limit?: number;
                /** @description nextCursor from the previous page. */
                cursor?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["Report_usage"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    reportSupervisionLog: {
        parameters: {
            query?: {
                /** @description A brand_… id. */
                brandId?: string;
                /** @description From this day (UTC) or moment, included. */
                from?: string;
                /** @description Up to this day (UTC) or moment, not included. */
                to?: string;
                /** @description The date that from, to and the order use: startedAt. */
                dateField?: "startedAt";
                /** @description Rows per page, 1 to 1000. */
                limit?: number;
                /** @description nextCursor from the previous page. */
                cursor?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["Report_supervision_log"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    reportQueueAlertEvents: {
        parameters: {
            query?: {
                /** @description A brand_… id. */
                brandId?: string;
                /** @description From this day (UTC) or moment, included. */
                from?: string;
                /** @description Up to this day (UTC) or moment, not included. */
                to?: string;
                /** @description The date that from, to and the order use: at. */
                dateField?: "at";
                /** @description Rows per page, 1 to 1000. */
                limit?: number;
                /** @description nextCursor from the previous page. */
                cursor?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["Report_queue_alert_events"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listKnownIssues: {
        parameters: {
            query?: {
                /** @description A brand_… id. */
                brandId?: string;
                state?: "active" | "resolved";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["KnownIssue"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    declareKnownIssue: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    brandIds: string[];
                    title: string;
                    /**
                     * @description What customers read, by language: "default" (the brand’s main language), then two-letter codes ("fr").
                     * @example {
                     *       "default": "We know card payments are failing right now and are fixing it.",
                     *       "fr": "Nous savons que les paiements par carte échouent en ce moment."
                     *     }
                     */
                    texts: {
                        [key: string]: string;
                    };
                    /**
                     * @description Who it concerns; each list empty means everyone. Countries and tags are read on the customer’s contact.
                     * @default {
                     *       "channels": [],
                     *       "countries": [],
                     *       "languages": [],
                     *       "tags": []
                     *     }
                     */
                    scope?: {
                        /** @default [] */
                        channels?: ("facebook_page" | "instagram" | "threads" | "bluesky" | "linkedin" | "linkedin_page" | "youtube" | "tiktok" | "x" | "telegram" | "google_business" | "pinterest" | "discord" | "slack" | "teams" | "app_store" | "google_play" | "trustpilot" | "yelp" | "whatsapp" | "web" | "email")[];
                        /** @default [] */
                        countries?: string[];
                        /** @default [] */
                        languages?: string[];
                        /** @default [] */
                        tags?: string[];
                    };
                    /**
                     * @description What it does while on: one reply per conversation, the website chat banner, the help centre banner, the AI agent told, new tickets kept out of the service targets.
                     * @default {
                     *       "reply": true,
                     *       "banner": true,
                     *       "helpCentre": true,
                     *       "aiAgent": true,
                     *       "excludeSla": false
                     *     }
                     */
                    options?: {
                        /** @default true */
                        reply?: boolean;
                        /** @default true */
                        banner?: boolean;
                        /** @default true */
                        helpCentre?: boolean;
                        /** @default true */
                        aiAgent?: boolean;
                        /** @default false */
                        excludeSla?: boolean;
                    };
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnownIssue"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getKnownIssue: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                knownIssueId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        id: string;
                        brandIds: string[];
                        title: string;
                        texts: {
                            [key: string]: string;
                        };
                        scope: {
                            channels: string[];
                            countries: string[];
                            languages: string[];
                            tags: string[];
                        };
                        options: {
                            reply: boolean;
                            banner: boolean;
                            helpCentre: boolean;
                            aiAgent: boolean;
                            excludeSla: boolean;
                        };
                        /** @enum {string} */
                        state: "active" | "resolved";
                        startedAt: string;
                        updates: {
                            at: string;
                            texts: {
                                [key: string]: string;
                            };
                        }[];
                        resolvedAt: string | null;
                        closed: {
                            count: number;
                            messaged: number;
                            skipped: number;
                        } | null;
                        report: {
                            total: number;
                            byChannel: {
                                [key: string]: number;
                            };
                            byHour: {
                                hour: string;
                                count: number;
                            }[];
                            replied: number;
                            slaExcluded: number;
                        };
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    updateKnownIssue: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                knownIssueId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description What customers read, by language: "default" (the brand’s main language), then two-letter codes ("fr").
                     * @example {
                     *       "default": "We know card payments are failing right now and are fixing it.",
                     *       "fr": "Nous savons que les paiements par carte échouent en ce moment."
                     *     }
                     */
                    texts: {
                        [key: string]: string;
                    };
                    /** @default null */
                    note?: string | null;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnownIssue"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    resolveKnownIssue: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                knownIssueId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @default true */
                    closeTickets?: boolean;
                    note: string;
                    /** @default null */
                    message?: {
                        [key: string]: string;
                    } | null;
                    /** @default null */
                    postNote?: string | null;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnownIssue"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listLinks: {
        parameters: {
            query?: {
                /** @description A brand_… id. */
                brandId?: string;
                /** @description Only links tagged with this campaign (exactly). */
                campaign?: string;
                source?: "manual" | "post" | "api";
                /** @description Archived links (they answer 410), live ones (the default) or both. */
                archived?: "true" | "false" | "all";
                /** @description How many per page, 1 to 100. */
                limit?: number;
                /** @description nextCursor from the previous page. */
                cursor?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["Link"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    createLink: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description A brand_… id.
                     * @example brand_3kTqM9xWvB2aLpZ8cR1dEf
                     */
                    brandId: string;
                    destination: string;
                    /** @default  */
                    title?: string;
                    key?: string;
                    /** @default  */
                    campaign?: string;
                    /** @default {} */
                    utm?: {
                        source?: string;
                        medium?: string;
                        campaign?: string;
                        content?: string;
                        term?: string;
                    };
                    /**
                     * @description On the brand’s own domain when it has one; false: always Hivenza’s address.
                     * @default true
                     */
                    onBrandDomain?: boolean;
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Link"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getLink: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                linkId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Link"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    updateLink: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                linkId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    destination?: string;
                    title?: string;
                    campaign?: string;
                    utm?: {
                        source?: string;
                        medium?: string;
                        campaign?: string;
                        content?: string;
                        term?: string;
                    };
                    archived?: boolean;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Link"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getLinkStats: {
        parameters: {
            query?: {
                from?: string;
                to?: string;
            };
            header?: never;
            path: {
                linkId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LinkStats"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getCaseStatus: {
        parameters: {
            query?: {
                /** @description The customer’s language for the stage’s words. */
                locale?: "en" | "fr";
            };
            header?: never;
            path: {
                conversationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CaseStatus"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    updateCaseStatus: {
        parameters: {
            query?: {
                /** @description The customer’s language for the stage’s words. */
                locale?: "en" | "fr";
            };
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                conversationId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    stage?: string;
                    off?: boolean;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CaseStatus"];
                };
            };
            /**
             * @description The request has a problem (validation_failed, invalid_cursor…).
             *
             *     `validation_failed`: The stage is not one of this ticket type’s.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    requestCaseDocument: {
        parameters: {
            query?: {
                /** @description The customer’s language for the stage’s words. */
                locale?: "en" | "fr";
            };
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                conversationId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example A photo of the receipt */
                    name: string;
                    /** @default null */
                    description?: string | null;
                    /**
                     * @description Narrower than the brand’s kinds for this one; empty: the brand’s.
                     * @default []
                     */
                    kinds?: ("pdf" | "jpeg" | "png" | "webp" | "heic" | "docx" | "xlsx")[];
                    /** @default false */
                    ask?: boolean;
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CaseStatus"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    addCaseMessage: {
        parameters: {
            query?: {
                /** @description The customer’s language for the stage’s words. */
                locale?: "en" | "fr";
            };
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                conversationId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    text: string;
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CaseStatus"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description A conflict (idempotency_mismatch, request_in_progress, version_conflict…).
             *
             *     `conflict`: The page can’t show this ticket, or it takes no messages.
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getLiveQueue: {
        parameters: {
            query?: {
                /** @description A brand_… id. */
                brandId?: string;
                /** @description A team_… id. */
                teamId?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "queue";
                        items: {
                            conversationId: string;
                            number: number | null;
                            brandId: string;
                            platform: string;
                            teamId: string | null;
                            assigneeId: string | null;
                            priority: string;
                            /** Format: date-time */
                            waitingSince: string;
                            /** @description A target missed, or due within the hour. */
                            risk: ("breached" | "due_soon") | null;
                            dueAt: string | null;
                        }[];
                        teams: {
                            teamId: string | null;
                            name: string | null;
                            waiting: number;
                            inProgress: number;
                            atRisk: number;
                            breached: number;
                            oldestWaitingAt: string | null;
                        }[];
                        totals: {
                            waiting: number;
                            inProgress: number;
                            atRisk: number;
                            breached: number;
                            oldestWaitingAt: string | null;
                        };
                        truncated: boolean;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getWall: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "wall";
                        totals: {
                            waiting: number;
                            inProgress: number;
                            atRisk: number;
                            breached: number;
                            oldestWaitingAt: string | null;
                        };
                        teams: {
                            teamId: string | null;
                            name: string | null;
                            waiting: number;
                            inProgress: number;
                            atRisk: number;
                            breached: number;
                            oldestWaitingAt: string | null;
                        }[];
                        people: {
                            answering: number;
                            away: number;
                        };
                        /** Format: date-time */
                        updatedAt: string;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listSupervisions: {
        parameters: {
            query?: {
                /** @description How many per page, 1 to 100. */
                limit?: number;
                /** @description nextCursor from the previous page. */
                cursor?: string;
                /** @description A brand_… id. */
                brandId?: string;
                /** @description A conv_… id. */
                conversationId?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["Supervision"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getShiftReport: {
        parameters: {
            query: {
                from: string;
                to: string;
                timezone?: string;
                /** @description A brand_… id. */
                brandId?: string;
                /** @description A team_… id. */
                teamId?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ShiftReport"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getShortTomorrow: {
        parameters: {
            query?: {
                /** @description A team_… id. */
                teamId?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["ShortTomorrow"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listQueueAlerts: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["QueueAlert"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listQueueAlertEvents: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                queueAlertId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        alert: components["schemas"]["QueueAlert"];
                        events: {
                            id: string;
                            /** @enum {string} */
                            state: "crossed" | "cleared";
                            value: number;
                            threshold: number;
                            agentId: string | null;
                            told: number;
                            channels: string[];
                            /** Format: date-time */
                            at: string;
                        }[];
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listTicketApprovals: {
        parameters: {
            query?: {
                /** @description How many per page, 1 to 100. */
                limit?: number;
                /** @description nextCursor from the previous page. */
                cursor?: string;
                state?: "pending" | "approved" | "refused" | "expired" | "withdrawn";
                kind?: "refund" | "waiver" | "discount" | "exception" | "disclosure" | "other";
                /** @description A brand_… id. */
                brandId?: string;
                /** @description A conv_… id. */
                conversationId?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["Approval"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getTicketApproval: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                approvalId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Approval"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    askTicketApproval: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                conversationId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @enum {string} */
                    kind: "refund" | "waiver" | "discount" | "exception" | "disclosure" | "other";
                    /** @default null */
                    amount?: {
                        value: number;
                        /** @example EUR */
                        currency: string;
                    } | null;
                    /** @example Charged twice for the annual plan in September. */
                    why: string;
                    ruleId?: string | null;
                    /** @description Who approves, when no rule covers it. */
                    approvers?: {
                        people?: string[];
                        teams?: string[];
                    } | null;
                    /** @default 1 */
                    needed?: 1 | 2;
                    /** @default 48 */
                    deadlineHours?: number;
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Approval"];
                };
            };
            /**
             * @description The request has a problem (validation_failed, invalid_cursor…).
             *
             *     `validation_failed`: No rule covers it and no approver is named.
             */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description A conflict (idempotency_mismatch, request_in_progress, version_conflict…).
             *
             *     `conflict`: A request of this kind already waits on the ticket, or nobody besides the asker can approve it.
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    decideTicketApproval: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                approvalId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @enum {string} */
                    decision: "approve" | "refuse";
                    /** @default null */
                    reason?: string | null;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Approval"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description The key can't do this (missing_scope, ip_not_allowed, api_paused…).
             *
             *     `forbidden`: The person isn’t one of its approvers, or asked for it.
             */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description A conflict (idempotency_mismatch, request_in_progress, version_conflict…).
             *
             *     `conflict`: It was already decided, or they already decided it.
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    withdrawTicketApproval: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                approvalId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @default null */
                    reason?: string | null;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Approval"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listTicketIssues: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                conversationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["IssueLink"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    linkTicketIssue: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                conversationId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @example ENG-123 */
                    issue: string;
                    /**
                     * @description linear or jira, when the workspace connected both. Left out: the tracker an address names, else the first connected.
                     * @enum {string}
                     */
                    provider?: "linear" | "jira";
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["IssueLink"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description Not found, or not reachable with this key (another workspace's, outside the key's brands).
             *
             *     `not_found`: The tracker has no such issue, or the connection doesn’t see it.
             */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description A conflict (idempotency_mismatch, request_in_progress, version_conflict…).
             *
             *     `conflict`: The issue is already linked to the ticket, the ticket has 10, or no tracker is connected.
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description Error
             *
             *     `tracker_unavailable`: The tracker couldn’t be reached or refused.
             */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getTicketIssue: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                issueLinkId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["IssueLink"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    unlinkTicketIssue: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                issueLinkId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        id: string;
                        object: string;
                        /** @constant */
                        deleted: true;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listTrackerTeams: {
        parameters: {
            query?: {
                /** @description linear or jira, when the workspace connected both. Left out: the tracker an address names, else the first connected. */
                provider?: "linear" | "jira";
                /** @description A team or project id from this list. */
                teamId?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        provider: "linear" | "jira";
                        siteName: string;
                        /**
                         * @description What the tracker calls a team: Jira’s are projects.
                         * @enum {string}
                         */
                        teamWord: "team" | "project";
                        defaultTeamId: string | null;
                        defaultIssueTypeId: string | null;
                        teams: {
                            id: string;
                            key: string;
                            name: string;
                        }[];
                        options: {
                            labels: {
                                id: string;
                                name: string;
                            }[];
                            projects: {
                                id: string;
                                name: string;
                            }[];
                            issueTypes: {
                                id: string;
                                name: string;
                            }[];
                        } | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    createTicketIssue: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                conversationId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    teamId: string;
                    /** @example Receipts show the wrong VAT rate for business customers */
                    title: string;
                    /** @default  */
                    description?: string;
                    /** @default [] */
                    labelIds?: string[];
                    /**
                     * @default none
                     * @enum {string}
                     */
                    priority?: "none" | "urgent" | "high" | "normal" | "low";
                    /**
                     * @description Linear’s project (optional).
                     * @default null
                     */
                    projectId?: string | null;
                    /**
                     * @description Jira’s issue type (see listTrackerTeams with teamId).
                     * @default null
                     */
                    issueTypeId?: string | null;
                    /**
                     * @description linear or jira, when the workspace connected both. Left out: the tracker an address names, else the first connected.
                     * @enum {string}
                     */
                    provider?: "linear" | "jira";
                };
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["IssueLink"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description A conflict (idempotency_mismatch, request_in_progress, version_conflict…).
             *
             *     `conflict`: The ticket already links 10 issues, or no tracker is connected.
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description Error
             *
             *     `tracker_unavailable`: The tracker couldn’t be reached or refused (an unknown team or label).
             */
            502: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listChecklists: {
        parameters: {
            query?: {
                /** @description Only this brand’s. */
                brandId?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["Checklist"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getChecklist: {
        parameters: {
            query?: {
                /** @description The first day (the brand’s), YYYY-MM-DD. Default: 29 days before `to`. */
                from?: string;
                /** @description The last day, YYYY-MM-DD. Default: today. */
                to?: string;
            };
            header?: never;
            path: {
                checklistId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        id: string;
                        /** @constant */
                        object: "checklist";
                        brandId: string;
                        name: string;
                        enabled: boolean;
                        title: string;
                        intro: string;
                        steps: {
                            key: string;
                            title: string;
                            text: string;
                            button: {
                                label: string;
                                /** @enum {string} */
                                kind: "url" | "action";
                                url: string | null;
                                /** @description The name the site’s code hears with Hivenza.on("action", fn). */
                                action: string | null;
                            } | null;
                            completion: {
                                /** @enum {string} */
                                kind: "event" | "tick" | "link";
                                event: string | null;
                                match: {
                                    key: string;
                                    value: string;
                                }[];
                            };
                        }[];
                        /** @description Starts by itself for its audience on its pages; else only from a workflow or this API. */
                        autoStart: boolean;
                        /** @description Who it is for. Every part that is set must hold. */
                        audience: {
                            /** @enum {string} */
                            visitors: "everyone" | "new" | "returning";
                            /** @enum {string} */
                            signedIn: "any" | "signed_in" | "anonymous";
                            details: {
                                key: string;
                                op: string;
                                value: string | null;
                            }[];
                            plans: string[];
                            languages: string[];
                            firstSeen: {
                                /** @enum {string} */
                                op: "within_days" | "older_than_days";
                                days: number;
                            } | null;
                            events: {
                                name: string;
                                did: boolean;
                                withinDays: number | null;
                            }[];
                            tags: string[];
                        };
                        pages: string[];
                        where: {
                            home: boolean;
                            panel: boolean;
                        };
                        started: number;
                        completed: number;
                        dismissed: number;
                        /** Format: date-time */
                        createdAt: string;
                        results: {
                            from: string;
                            to: string;
                            started: number;
                            completed: number;
                            dismissed: number;
                            /** @description The median time from start to finish, for those who finished. */
                            medianMinutes: number | null;
                            steps: {
                                key: string;
                                title: string;
                                done: number;
                                /** @description Those who stopped at this step (their first step not done). */
                                stopped: number;
                            }[];
                            dropOff: {
                                key: string;
                                title: string;
                                people: number;
                            } | null;
                        };
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    startChecklist: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                checklistId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description A contact_… id.
                     * @example contact_3kTqM9xWvB2aLpZ8cR1dEf
                     */
                    contactId: string;
                };
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "checklist_progress";
                        checklistId: string;
                        contactId: string | null;
                        /** @enum {string} */
                        via: "auto" | "workflow" | "api";
                        /** Format: date-time */
                        startedAt: string;
                        completedAt: string | null;
                        dismissedAt: string | null;
                        steps: {
                            key: string;
                            title: string;
                            done: boolean;
                            doneAt: string | null;
                        }[];
                        /** @description False when it was already started. */
                        started: boolean;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description A conflict (idempotency_mismatch, request_in_progress, version_conflict…).
             *
             *     `conflict`: The checklist is off, or the contact has never been on the site or in the app.
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listContactChecklists: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                contactId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["ChecklistProgress"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listBanners: {
        parameters: {
            query?: {
                /** @description Only this brand’s. */
                brandId?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["Banner"][];
                        /** @description More items after these: ask again with cursor=nextCursor. */
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getBanner: {
        parameters: {
            query?: {
                /** @description The first day (the brand’s), YYYY-MM-DD. Default: 29 days before `to`. */
                from?: string;
                /** @description The last day, YYYY-MM-DD. Default: today. */
                to?: string;
            };
            header?: never;
            path: {
                bannerId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        id: string;
                        /** @constant */
                        object: "banner";
                        brandId: string;
                        name: string;
                        enabled: boolean;
                        text: string;
                        button: {
                            label: string;
                            /** @enum {string} */
                            kind: "url" | "action";
                            url: string | null;
                            /** @description The name the site’s code hears with Hivenza.on("action", fn). */
                            action: string | null;
                        } | null;
                        dismissable: boolean;
                        /** @enum {string} */
                        style: "plain" | "honey" | "note";
                        /** @enum {string} */
                        position: "top" | "bottom";
                        /** @enum {string} */
                        frequency: "once" | "daily" | "until_dismissed" | "every_visit";
                        onlyOpenHours: boolean;
                        startsAt: string | null;
                        endsAt: string | null;
                        /** @description Who it is for. Every part that is set must hold. */
                        audience: {
                            /** @enum {string} */
                            visitors: "everyone" | "new" | "returning";
                            /** @enum {string} */
                            signedIn: "any" | "signed_in" | "anonymous";
                            details: {
                                key: string;
                                op: string;
                                value: string | null;
                            }[];
                            plans: string[];
                            languages: string[];
                            firstSeen: {
                                /** @enum {string} */
                                op: "within_days" | "older_than_days";
                                days: number;
                            } | null;
                            events: {
                                name: string;
                                did: boolean;
                                withinDays: number | null;
                            }[];
                            tags: string[];
                        };
                        pages: string[];
                        seen: number;
                        dismissed: number;
                        clicked: number;
                        /** Format: date-time */
                        createdAt: string;
                        results: {
                            from: string;
                            to: string;
                            seen: number;
                            dismissed: number;
                            clicked: number;
                            days: {
                                day: string;
                                seen: number;
                                dismissed: number;
                                clicked: number;
                            }[];
                        };
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    listBookings: {
        parameters: {
            query?: {
                /** @description How many per page, 1 to 100. */
                limit?: number;
                /** @description nextCursor from the previous page. */
                cursor?: string;
                /** @description A brand_… id. */
                brandId?: string;
                status?: "booked" | "cancelled" | "missed";
                when?: "upcoming" | "past" | "all";
                /** @description A bkgtype_… id. */
                typeId?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @constant */
                        object: "list";
                        data: components["schemas"]["Booking"][];
                        hasMore: boolean;
                        nextCursor: string | null;
                    };
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    getBooking: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                bookingId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Booking"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    cancelBooking: {
        parameters: {
            query?: never;
            header?: {
                /** @description Any unique value (a UUID). Sending the same request again with it within 24 hours returns the first answer instead of doing it twice. */
                "Idempotency-Key"?: components["parameters"]["IdempotencyKey"];
            };
            path: {
                bookingId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "X-Request-Id": components["headers"]["X-Request-Id"];
                    "RateLimit-Remaining": components["headers"]["RateLimit-Remaining"];
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Booking"];
                };
            };
            /** @description The request has a problem (validation_failed, invalid_cursor…). */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description No key, or a key that is wrong, deleted or expired. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description The key can't do this (missing_scope, ip_not_allowed, api_paused…). */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not found, or not reachable with this key (another workspace's, outside the key's brands). */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /**
             * @description A conflict (idempotency_mismatch, request_in_progress, version_conflict…).
             *
             *     `conflict`: It is not a booked time (already cancelled, missed, or only invited).
             */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests: wait for Retry-After. */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
}
