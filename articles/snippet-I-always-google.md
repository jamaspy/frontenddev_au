---
title: "Handy React Code Snippets"
date: "2020-10-18"
exerpt: "A better place to store my code snippets"
description: "A better place to store my code snippets"
tags:
  - helpful
  - code
  - react
  - snippets
  - react-query
---

A list of code snippets that I have saved in a `notes.md` file that I refer to often. I thought this would be a better place to store them and maybe helpful to someone else :) I will continue to add to the list as I discover more...

## 1. Adding a new item to an array in state

```javascript
const [state, setState] = useState({ username: "james85", items: [] });
const addNewItem = (text: string) => {
  setState({
    ...state,
    items: [...state.items, { id: uuid(), text }],
  });
};
```

## 2. Removing an item from an array in state

```javascript
const [state, setState] = useState({
  username: "james85",
  items: [
    { id: 1, text: "Do Housework" },
    { id: 2, text: "Do Laundry" },
  ],
});
const removeItem = (id: number) => {
  const items = state.items.filter((item) => item.id !== id);
  setState({ ...state, items });
};
```

## 3. Updating an item in an array in state

```javascript
const [state, setState] = useState({
  username: "james85",
  items: [
    { id: 1, text: "Do Housework" },
    { id: 2, text: "Do Laundry" },
  ],
});
const updateItem = (id: number, text: string) => {
  const items = state.items.map((item) => {
    if (item.id === id) {
      return { ...item, text };
    }
    return item;
  });
  setState({ ...state, items });
};
```

## 4. Find the sum of an array of numbers

Create a reducer constant in a utils directory and import it where needed.

```javascript
export const reducer = (previousValue: number, currentValue: number) =>
  previousValue + currentValue;

const yourArray = [1, 2, 3, 4, 5];
const sum = yourArray.reduce(reducer);

console.log(sum); // 15
```

## 5. Changing query name of useQuery invalidates the cache and refetches the data from the server.

**important**: Ensure you use a `return` statement in the `onSuccess` hook inorder for it to wait for the response. Otherwise it will run before the response is received.

```javascript
const [page, setPage] = useState<number>(1);
const { data } = useQuery(
  ["table_data", page],
  () => getTableDate(page),
  {
    onSuccess: (data) => {
        return queryClient.invalidateQueries(["table_data", page]);
    },
  }
);
....
<button onClick={()=> setPage(page + 1)}>Next Page</button>
```

## 6. Handy currency formatter

```javascript
export const formatCurrency = (
  minimumFractionDigits,
  maximumFractionDigits
) => {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    minimumFractionDigits,
    maximumFractionDigits,
  });
};

<p>{formatCurrency(2, 2).format(item?.value)}</p>;
```

## 7. Handy date formatter

```javascript
export const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    time: "short",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
```

## 8. Reveal a hidden element on scroll

```javascript
const [isOpen, setIsOpen] = React.useState(false);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 100) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```
