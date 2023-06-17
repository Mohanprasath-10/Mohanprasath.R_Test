# Full Stack Development Class Test Assignment

## Part-A (Theory)

### 1) Working of Internet Website in Terms of Front-end & Back-end Divisions

When you visit a website, you interact with its front-end, which is the visible part that you see and interact with directly. It's like the face of the website. The front-end is responsible for creating a visually appealing and user-friendly interface. It takes care of the layout, colors, fonts, and interactive elements. It's built using HTML, CSS, and JavaScript, which work together to structure the content, style it, and add interactivity.

On the other hand, the back-end of a website is like the brain behind the scenes. It handles all the behind-the-scenes operations that make the website function smoothly. This includes managing databases, processing user input, handling server requests, and integrating with external services. The back-end is built using programming languages like PHP, Python, Ruby on Rails, or Node.js. These languages allow developers to write code that handles data storage, retrieval, and processing.

Think of the front-end as the part that users directly interact with, while the back-end takes care of the data and logic that enable those interactions. Both divisions work together harmoniously to create a website that provides a seamless and enjoyable user experience.

### 2) Tags in HTML and Examples of Each Category

In HTML (Hypertext Markup Language), tags are used to define the structure and elements of a web page. Tags are enclosed in angle brackets (< >) and typically come in pairs: an opening tag and a closing tag. The opening tag denotes the beginning of an element, and the closing tag marks its end.

Here are some categories of HTML tags with examples:

1. Headings:
   - `<h1>` to `<h6>` tags are used to define headings of different levels.
   - Example:
     ```html
     <h1>This is the main heading</h1>
     <h2>This is a subheading</h2>
     ```

2. Paragraphs:
   - The `<p>` tag is used to define paragraphs of text.
   - Example:
     ```html
     <p>This is a paragraph of text.</p>
     <p>This is another paragraph.</p>
     ```

3. Links:
   - The `<a>` tag is used to create hyperlinks.
   - Example:
     ```html
     <a href="https://www.example.com">Visit Example.com</a>
     ```

4. Images:
   - The `<img>` tag is used to display images on a web page.
   - Example:
     ```html
     <img src="image.jpg" alt="Description of the image">
     ```

5. Lists:
   - HTML offers two types of lists: ordered lists `<ol>` and unordered lists `<ul>`.
   - List items are defined using the `<li>` tag.
   - Example:
     ```html
     <ul>
       <li>Item 1</li>
       <li>Item 2</li>
       <li>Item 3</li>
     </ul>

     <ol>
       <li>First item</li>
       <li>Second item</li>
       <li>Third item</li>
     </ol>
     ```

### 3) Working Procedure of Virtual DOM

The Virtual DOM (Document Object Model) is a concept used in frameworks like React to optimize the rendering process of web applications. Here's an explanation of the working procedure of the Virtual DOM:

1. Initial Render:
   - When you create a web application using a framework like React, the initial render of the UI is performed.
   - At this stage, the Virtual

 DOM is created as an in-memory representation of the actual DOM.

2. Updating State:
   - As users interact with the application, changes occur in the application's state.
   - When a state update happens, the framework re-renders the UI to reflect the updated state.

3. Virtual DOM Reconciliation:
   - Before the re-rendering process, the framework creates a new Virtual DOM representation of the UI based on the updated state.
   - This new Virtual DOM is compared with the previous Virtual DOM to identify the differences, known as "diffing" or reconciliation.

4. Diffing:
   - The diffing process involves comparing the new Virtual DOM with the previous Virtual DOM to determine the minimal number of changes needed to update the actual DOM.
   - This process is efficient because comparing Virtual DOMs is faster than directly manipulating the real DOM.

5. Update the Actual DOM:
   - Once the differences between the new and previous Virtual DOMs are identified, the framework applies these changes to the actual DOM.
   - It updates only the necessary parts of the DOM instead of re-rendering the entire page, which improves performance.

6. Re-rendering:
   - If there are components or elements in the UI that have changed due to the state update, the framework re-renders only those specific components or elements, not the entire UI.
   - This targeted re-rendering further optimizes the performance of the application.

7. User Interaction:
   - The updated UI is then displayed to the user.
   - Users can interact with the UI, triggering events or state changes, and the process repeats from step 2.

### 4) Differences between MySQL and NoSQL

MySQL:
- A relational database in nature.
- Modeled based on the concept of "table."
- Being relational in nature can be a tough task to scale big data.
- A detailed database model needs to be in place before the creation.
- A vast and expert community is available.
- SQL is the standard language.
- Schema is rigid, and new column or field insertion affects the design.

NoSQL:
- A non-relational database in nature.
- Modeled based on the idea of a "document."
- Easily scalable for big data as compared to relational databases.
- No need to develop an exact database model.
- A community is growing rapidly but smaller as compared to MySQL.
- Lack of a standard query language.
- Dynamic schema is a key benefit of NoSQL.
- New columns or fields can be inserted without affecting the existing design.

### 5) MongoDB: An Overview of a DBMS Technology

One popular DBMS (Database Management System) technology is MongoDB. MongoDB is a NoSQL database that offers a flexible and scalable approach to storing and managing data.

Unlike traditional relational databases, MongoDB uses a document-based model. It stores data in flexible, JSON-like documents called BSON (Binary JSON), which allows for dynamic schemas and easy representation of complex data structures. This means you can store data in a way that closely resembles how it is used in your application.

MongoDB is known for its scalability and high-performance capabilities. It can handle large volumes of data and high traffic loads by distributing data across multiple servers or clusters.

Another notable feature of MongoDB is its support for rich query capabilities. It provides a flexible query language that allows you to retrieve and manipulate data using a syntax similar to JSON. MongoDB also supports indexing, which helps improve query performance by optimizing data retrieval based on specified fields.

MongoDB offers built-in features for data replication and high availability. It supports automatic failover and data redundancy, ensuring that your data remains accessible and protected even in the event of server failures.

Additionally, MongoDB provides a comprehensive set of tools and integrations that simplify development and administration tasks. It has official drivers for various

 programming languages, making it easy to work with MongoDB in your preferred programming environment.

Overall, MongoDB offers a flexible, scalable, and high-performance solution for managing data. Its document-based model, scalability features, and rich query capabilities make it suitable for a wide range of applications, including real-time analytics, content management systems, and e-commerce platforms.
