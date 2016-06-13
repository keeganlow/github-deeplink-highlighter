# github-deeplink-highlighter
github notifications links often include url fragments to indicate the comment, event, etc. that the notification pertains to. Unfortunately, when you folow the link, it's not always clear which item in the stream of events, comments, etc. is the one the notification refers to. The browser will try to display the item matching the url fragment at the top of the viewport, but this is unreliable, especially as viewport height increases and as the event in question moves closer to the end of the list of events.

This extension adds a temporary highlight effect to the salient comment or event. 

Note: notifications about PR merges and branch deletions don't link to the events, they just link to the PR itself. This doesn't make sense, but it's out of my hands :(

## installation
- clone this repo
- follow the "Load the Extension" steps [here](Load the extension)
