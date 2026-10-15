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
         * @description A new playlist on the channel (public unless privacy says otherwise).
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
         * @description Hivenza downloads an image or video (up to 25 MB) from a public HTTPS address. Bigger files: use POST /media/uploads.
         */
        post: operations["createMediaFromUrl"];
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
        /** List media */
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
        patch?: never;
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
         * @description Newest first. With updatedAfter, everything changed since a moment (to keep a copy in sync).
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
         * @description Drafts, scheduled and failed posts. A scheduled post stays scheduled, checked again. Published posts are locked.
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
         * @description The visitors of the brand’s website, counted by the website chat while it runs on the site (no cookies of anyone else’s; visitors whose browser says Do Not Track, or whose site says they declined, are left out): by day, week, month or year in the brand’s timezone, new and returning, visits, page views, chats started, the top pages, sources, countries and devices, against the period just before.
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
            plan: "free" | "starter" | "pro" | "agency";
            trialEndsAt: string | null;
            key: {
                id: string;
                name: string;
                /** @enum {string} */
                mode: "live" | "test";
                scopes: ("brands:read" | "accounts:read" | "media:write" | "posts:read" | "posts:write" | "posts:publish" | "inbox:read" | "inbox:write" | "tickets:read" | "tickets:write" | "contacts:read" | "contacts:write" | "analytics:read" | "listening:read" | "webhooks:manage")[];
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
            text: string;
            firstComment: string;
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
            }[];
            targets: components["schemas"]["PostTarget"][];
            /** @description The post in the Hivenza app (none on the test brand). */
            url: string | null;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            updatedAt: string;
        };
        PostTarget: {
            accountId: string;
            /** @enum {string} */
            platform: "facebook_page" | "instagram" | "threads" | "bluesky" | "linkedin" | "linkedin_page" | "youtube" | "tiktok" | "x" | "telegram" | "google_business" | "pinterest" | "discord" | "slack" | "teams";
            /** @enum {string} */
            status: "pending" | "scheduled" | "publishing" | "published" | "failed";
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
                /** @description TikTok options: mode (draft: into the creator’s TikTok drafts to finish there, the only mode until Direct Post is approved; direct: straight to the profile), and for direct: privacy, comments, duet, stitch, disclosure. */
                tiktok?: {
                    [key: string]: unknown;
                };
                /** @description YouTube options: the AI disclosure and playlists. */
                youtube?: {
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
            /** @description For publish=schedule: ISO 8601, or “2026-10-14T09:30” without an offset, read in the brand’s timezone. */
            scheduledAt?: string;
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
                }[];
            }[];
        };
        PostUpdate: {
            text?: string;
            accountIds?: string[];
            mediaIds?: string[];
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
                /** @description TikTok options: mode (draft: into the creator’s TikTok drafts to finish there, the only mode until Direct Post is approved; direct: straight to the profile), and for direct: privacy, comments, duet, stitch, disclosure. */
                tiktok?: {
                    [key: string]: unknown;
                };
                /** @description YouTube options: the AI disclosure and playlists. */
                youtube?: {
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
        Conversation: {
            id: string;
            /** @constant */
            object: "conversation";
            brandId: string;
            /** @description The ticket number within the brand (#1042). */
            number: number | null;
            /** @enum {string} */
            platform: "facebook_page" | "instagram" | "threads" | "bluesky" | "linkedin" | "linkedin_page" | "youtube" | "tiktok" | "x" | "telegram" | "google_business" | "pinterest" | "discord" | "slack" | "teams" | "whatsapp" | "web" | "email";
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
            /** @description A teammate who sees the brand, or null to unassign. */
            assigneeId?: string | null;
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
                platform: "facebook_page" | "instagram" | "threads" | "bluesky" | "linkedin" | "linkedin_page" | "youtube" | "tiktok" | "x" | "telegram" | "google_business" | "pinterest" | "discord" | "slack" | "teams" | "whatsapp" | "web" | "email";
                externalId: string;
                username: string | null;
            }[];
            lastSeenAt: string | null;
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
            events: ("message.received" | "conversation.created" | "conversation.done" | "contact.created" | "contact.updated" | "post.published" | "post.failed" | "rating.received" | "ticket.assigned" | "ticket.state_changed" | "ticket.sla_breached" | "request.submitted" | "message.sent" | "post.scheduled" | "post.deleted" | "media.ready" | "account.disconnected" | "mention.received" | "activity.logged")[];
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
                platform?: "facebook_page" | "instagram" | "threads" | "bluesky" | "linkedin" | "linkedin_page" | "youtube" | "tiktok" | "x" | "telegram" | "google_business" | "pinterest" | "discord" | "slack" | "teams";
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
                    /**
                     * @default public
                     * @enum {string}
                     */
                    privacy?: "public" | "unlisted" | "private";
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
                        upload: {
                            url: string;
                            /** @constant */
                            method: "PUT";
                            headers: {
                                [key: string]: string;
                            };
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
                status?: "uploading" | "ready" | "rejected";
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
                        data: components["schemas"]["Media"][];
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
    listPosts: {
        parameters: {
            query?: {
                /** @description A brand_… id. */
                brandId?: string;
                status?: "draft" | "scheduled" | "publishing" | "published" | "in_drafts" | "partially_failed" | "failed";
                scheduledFrom?: string;
                scheduledTo?: string;
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
                        /** @description TikTok options: mode (draft: into the creator’s TikTok drafts to finish there, the only mode until Direct Post is approved; direct: straight to the profile), and for direct: privacy, comments, duet, stitch, disclosure. */
                        tiktok?: {
                            [key: string]: unknown;
                        };
                        /** @description YouTube options: the AI disclosure and playlists. */
                        youtube?: {
                            /** @description The altered or synthetic content disclosure. */
                            syntheticMedia?: boolean;
                            /** @description The channel’s playlists the video goes into once published (from list_youtube_playlists). */
                            playlistIds?: string[];
                        };
                        discord?: {
                            [key: string]: unknown;
                        };
                    }[];
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
                    "application/json": components["schemas"]["Post"];
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
    listConversations: {
        parameters: {
            query?: {
                /** @description A brand_… id. */
                brandId?: string;
                status?: "open" | "done";
                state?: "open" | "pending" | "on_hold" | "solved" | "closed";
                platform?: "facebook_page" | "instagram" | "threads" | "bluesky" | "linkedin" | "linkedin_page" | "youtube" | "tiktok" | "x" | "telegram" | "google_business" | "pinterest" | "discord" | "slack" | "teams" | "whatsapp" | "web" | "email";
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
    getSupportAnalytics: {
        parameters: {
            query: {
                /** @description A brand_… id. */
                brandId: string;
                from: string;
                to: string;
                platform?: "facebook_page" | "instagram" | "threads" | "bluesky" | "linkedin" | "linkedin_page" | "youtube" | "tiktok" | "x" | "telegram" | "google_business" | "pinterest" | "discord" | "slack" | "teams" | "whatsapp" | "web" | "email";
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
                    events: ("message.received" | "conversation.created" | "conversation.done" | "contact.created" | "contact.updated" | "post.published" | "post.failed" | "rating.received" | "ticket.assigned" | "ticket.state_changed" | "ticket.sla_breached" | "request.submitted" | "message.sent" | "post.scheduled" | "post.deleted" | "media.ready" | "account.disconnected" | "mention.received" | "activity.logged")[];
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
                    events?: ("message.received" | "conversation.created" | "conversation.done" | "contact.created" | "contact.updated" | "post.published" | "post.failed" | "rating.received" | "ticket.assigned" | "ticket.state_changed" | "ticket.sla_breached" | "request.submitted" | "message.sent" | "post.scheduled" | "post.deleted" | "media.ready" | "account.disconnected" | "mention.received" | "activity.logged")[];
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
                    event?: "message.received" | "conversation.created" | "conversation.done" | "contact.created" | "contact.updated" | "post.published" | "post.failed" | "rating.received" | "ticket.assigned" | "ticket.state_changed" | "ticket.sla_breached" | "request.submitted" | "message.sent" | "post.scheduled" | "post.deleted" | "media.ready" | "account.disconnected" | "mention.received" | "activity.logged";
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
                type?: "message.received" | "conversation.created" | "conversation.done" | "contact.created" | "contact.updated" | "post.published" | "post.failed" | "rating.received" | "ticket.assigned" | "ticket.state_changed" | "ticket.sla_breached" | "request.submitted" | "message.sent" | "post.scheduled" | "post.deleted" | "media.ready" | "account.disconnected" | "mention.received" | "activity.logged";
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
}
