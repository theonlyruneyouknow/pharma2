const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: "Pharma API",
        description: "W01-W04 CSE 341 - Rune Larsen",
        name: "Rune",
        version: "1.0.0",
        contact: {
            name: "Rune Larsen",
            email: "api@example.com",
            url: "http://example.com/pharma"
        },
       
    },
    host: process.env.NODE_ENV === 'production' 
        ? 'pharma.onrender.com'
        : 'localhost:4000',
    // host: 'localhost:4000',
    schemes: process.env.NODE_ENV === 'production' 
    ? ['https'] 
    : ['http', 'https'],
    basePath: '/',
    // Added HTTPS
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        // {
        //     name: 'Family',
        //     description: 'Endpoints for managing contacts'
        // },
        // {
        //     name: 'Users',
        //     description: 'User management endpoints'
        // }
    ],
    securityDefinitions: {  // Added security definitions
        apiKey: {
            type: 'apiKey',
            name: 'api_key',
            in: 'header'
        },
        OAuth2: {
            type: 'oauth2',
            flow: 'implicit',
            authorizationUrl: 'http://example.com/oauth/authorize'
        }
    },
    parameters: {  // Added global parameters
        limitParam: {
            name: 'limit',
            in: 'query',
            description: 'Maximum number of records to return',
            type: 'integer'
        }
    },
    responses: {  // Added common responses
        NotFound: {
            description: "Resource not found"
        },
        InvalidInput: {
            description: "Invalid input"
        },
        500: {
            description: "Server Error",
            schema: { $ref: "#/definitions/ErrorResponse" }
        }
    },
    definitions: {
        ErrorResponse: {
            status: 500,
            message: "Internal Server Error",
            details: "Error details here"
        },
        Contact: {
            firstName: 'Sarah',
            lastName: 'Birch',
            email: 'sarah@test.com',
            favoriteColor: 'Blue',
            birthday: '1990-01-01'
        },
        Pharma: {
            "Name": "Rune,Larsen",
            "Fill Date": "12/18/2024",
            "Prescription": "Cyclobenzaprine 10mg Tablets",
            "Rx #": 143658112491,
            "Qty": 90,
            "Prescriber": "Wilson,Erica",
            "Pharmacist": "LBH",
            "NDC#": 29300041510,
            "Insurance": "APM",
            "Claim Reference #": {
              "low": 825690111,
              "high": 56702253,
              "unsigned": false
            },
            "Price": "$0.00"
          },
          Item: {
              firstName: 'Sarah',
              lastName: 'Birch',
              email: 'sarah@test.com',
              favoriteColor: 'Blue',
              birthday: '1990-01-01'
          }
    }
};

const outputFile = './swagger-output.json';
const routes = ['./routes/index.js'];

// Generate Swagger JSON file
swaggerAutogen(outputFile, routes, doc);