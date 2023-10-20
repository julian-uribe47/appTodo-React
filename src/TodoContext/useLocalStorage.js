import React from "react";


function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);


    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localSorageItem = localStorage.getItem(itemName);

                let parsedItem;

                if (!localSorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localSorageItem);
                    setItem(parsedItem);
                }

                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);

            }
        }, 2000);

    }, [initialValue, itemName]);





    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return {
        item,
        saveItem,
        loading,
        error,
    };
}

export { useLocalStorage };

// const defaultTodos = [
//   { text: 'Ver tv', completed: true },
//   { text: 'Peinarse', completed: false },
//   { text: 'Bañarse', completed: false },
//   { text: 'Hacer compras', completed: false },
//   { text: 'Lavar el baño', completed: true },
// ];
//   localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));