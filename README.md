# To-do List Server with NestJS

## Technologies

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **class-validator**: A library for validation in TypeScript.
- **class-transformer**: A library for transforming plain objects into class instances.

## Architecture

The application follows a modular architecture with the following main components:

- **Controllers**: Handle incoming HTTP requests and return responses.
- **Services**: Contain the business logic.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/todo-backend.git
cd todo-backend
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:

```env
PORT=3000
```

### Running the Application

1. Start the application:

```bash
npm run start
```

### Endpoints

- **GET /todos**: Retrieve all to-do items.
- **GET /todos/:id**: Retrieve a specific to-do item by ID.
- **POST /todos**: Create a new to-do item.
- **PUT /todos/:id**: Update an existing to-do item by ID.
- **DELETE /todos/:id**: Delete a to-do item by ID.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

# Erick Vera Coder
