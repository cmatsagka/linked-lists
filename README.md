# Custom Linked List (JavaScript)

A from-scratch implementation of a **Singly Linked List** data structure, built as part of [The Odin Project](https://www.theodinproject.com/lessons/javascript-linked-lists#project-solution) curriculum. This project focuses on manual management of nodes and pointers using JavaScript **Factory Functions**.

---

## 🚀 Features

This implementation includes a variety of methods to manipulate the list:

- **`append(value)`**: Adds a new node to the end of the list.
- **`prepend(value)`**: Adds a new node to the start of the list.
- **`size()`**: Returns the total number of nodes in the list.
- **`getHead()`**: Returns the first node in the list.
- **`tail()`**: Returns the last node in the list.
- **`at(index)`**: Returns the node at the given index.
- **`pop()`**: Removes the head node from the list and returns its value.
- **`contains(value)`**: Returns `true` if the value is in the list, otherwise `false`.
- **`findIndex(value)`**: Returns the index of the node containing value, or `-1` if not found.
- **`toString()`**: Represents the LinkedList objects as strings in the format: `(value) -> (value) -> null`.

### 🌟 Extra Credit

- **`insertAt(index, ...values)`**: Inserts one or multiple values at a specific index.
- **`removeAt(index)`**: Removes the node at a specific index.

---

## 🛠️ Installation & Testing

This project uses **Babel** to support modern ES6 modules and **Jest** for comprehensive unit testing.

1. **Clone the repo:**

    ```bash
    git clone git@github.com:cmatsagka/linked-lists.git
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run tests:**
    ```bash
    npm test
    ```
