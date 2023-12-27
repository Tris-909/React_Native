# Questions need to be solved

1/ How are they creating icon on the top side of the phone ?

- https://icons.expo.fyi/Index ( You have to be able to use Expo to use this, which is what the tutorial is using)

2/ How are they passing blogs from ListScreen -> DetailScreen -> EditScreen ?
4/ How do they manage state across all components ?

- Have a context provider on top of all screen including navigator stack and all screens.
- In this context, we would have data and methods to alter it.
- React Context is all about moving data from one component to another component easily.

3/ How can they have the same Header title for all screens ?

- The tutorial is using an older version of navigator stack

5/ How did they manage to remove the keyboard when focusing on the text input ? Are they doing the same way as me ?

- They don't. The guy type on his keyboard on virtual iphone device, it does not show any keyboard.
