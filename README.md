# JavaScript DOM & Events - Questions & Answers

## 1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

- **getElementById**  
  - একটি element কে তার **id** দিয়ে সিলেক্ট করে।  
  - সবসময় শুধু **একটি element** রিটার্ন করে।  
  - উদাহরণ:  
    ```js
    const title = document.getElementById("title");
    ```

- **getElementsByClassName**  
  - একটি class এর সব element সিলেক্ট করে।  
  - একটি **HTMLCollection** রিটার্ন করে (array নয়, কিন্তু loop করা যায়)।  
  - উদাহরণ:  
    ```js
    const cards = document.getElementsByClassName("card");
    ```

- **querySelector**  
  - CSS selector ব্যবহার করে **প্রথম matching element** কে সিলেক্ট করে।  
  - উদাহরণ:  
    ```js
    const firstCard = document.querySelector(".card");
    ```

- **querySelectorAll**  
  - CSS selector ব্যবহার করে **সব matching element** কে সিলেক্ট করে।  
  - একটি **NodeList** রিটার্ন করে (forEach loop করা যায়)।  
  - উদাহরণ:  
    ```js
    const allCards = document.querySelectorAll(".card");
    ```

---

## 2. How do you create and insert a new element into the DOM

1. নতুন element তৈরি করা হয় `document.createElement()` দিয়ে।  
2. content যোগ করা হয় `textContent` বা `innerHTML` দিয়ে।  
3. DOM এ যোগ করা হয় `appendChild()` বা `append()` দিয়ে।  

উদাহরণ:  
```js
const newDiv = document.createElement("div");
newDiv.textContent = "Hello, I am a new element!";
document.body.appendChild(newDiv);
