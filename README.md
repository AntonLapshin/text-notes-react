# text-notes-react

![](https://www.stemmer-imaging.se/media/cache/gallery_dialog/uploads/suppliers/Datapath-I1.jpg)

Test assignment. Original description:

> Build a medium.com style commenting / notes system.
People can mark text and attach a comment to it.
You can assume that the editor will not change the text afterwards.
Make it work for a single user and a static text (no signup / login needed).
Please use a REST-API to manage storage in a DB.
You are free to use tools or frameworks that you feel comfortable with, but we prefer
NodeJS, React, Redux.
We know that you’re not a designer, but please try your best to make it look good
(e.g styling and transitions)

[Result](https://antonlapshin.github.io/text-notes-react)


# Scopes of work

Unit Tests
---

    $ yarn test
    $ yarn test-coverage

TODOs: 
+ Test React components by using JEST framework
+ Test reducers
+ Test helpers

Storage
---

TODOs:
+ Add a storage service. 
  + Save text notes in the localStorage (TEST)
  + Call REST API to serialize/deserialize the part of the state related to the text notes

API doesn't seem so challenging and might look something like this:

1 - Get all notes

    GET /api/notes

2 - Create a new note

    POST /api/notes

3 - Delete an existing note

    DELETE /api/notes/:id

4 - Edit an existing note

    PUT /api/notes/:id

5 - Add a new record for a post

    POST /api/notes/:id/records


Docs
---

TODOs:
+ Cover critical parts of the project
