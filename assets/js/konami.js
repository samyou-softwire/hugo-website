var keys = Array(8).fill("");

document.addEventListener("keydown", (event => {
    keys.push(event.key);
    keys = keys.slice(1);
    
    if (JSON.stringify(keys) === JSON.stringify(["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight"])) {
        console.log("konami!!")
    }
}));