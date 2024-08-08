# Free RPC

An Express.js application that acts as a proxy load balancer for Ethereum RPC nodes. This application distributes incoming JSON-RPC requests evenly across multiple Ethereum nodes.

## Features

- **Load Balancing:** Distributes JSON-RPC requests evenly across a set of Ethereum RPC nodes.
- **Easy Configuration:** Configure your RPC nodes in a simple JSON file.
- **Status Endpoint:** Provides an endpoint to check the status and configuration of the proxy.

## Getting Started

### Prerequisites

- Node.js

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/KingSimpa69/free_rpc.git
   cd free_rpc
   ```

2. **Install dependencies:**

   ```bash
   npm install
    ```

3. **Configure RPC nodes:**

    Modify the file named RPCS.json in the root directory with the your RPCs:  
    Various providers with free tiers **[HERE](https://docs.base.org/docs/tools/node-providers)**

   ```bash
    {
      "rpcs": [
        "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID",
        "https://mainnet.alchemyapi.io/v2/YOUR_ALCHEMY_API_KEY",
        "https://rpc.ankr.com/eth",
        "https://cloudflare-eth.com"
      ]
    }
    ```

### Usage

1. **Start the server:**

   ```bash
   npm start
    ```

2. **Endpoints:**

    (POST) =>/ : Forward JSON-RPC requests to Ethereum nodes.

    (GET) =>/ : Check the status and configuration of the proxy.

