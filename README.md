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
   or
   ```bash
   pnpm install
    ```
      or
   ```bash
   yarn install
    ```

4. **Configure RPC nodes:**

    Modify the file named RPCS.json in the root directory with the your RPCs:  
    Various providers with free tiers **[HERE](https://docs.base.org/docs/tools/node-providers)**

   ```bash
    {
      "rpcs": [
       "https://api.developer.coinbase.com/rpc/v1/base/KEY_GOES_HERE",
       "https://base-mainnet.g.alchemy.com/v2/KEY_GOES_HERE",
       "https://1rpc.io/KEY_GOES_HERE/base",
       "https://base-mainnet.g.allthatnode.com/full/evm/KEY_GOES_HERE",
       "https://rpc.ankr.com/base/KEY_GOES_HERE",
       "https://base-mainnet.blastapi.io/KEY_GOES_HERE",
      ]
    }
    ```

### Usage

1. **Start the server:**

   ```bash
   npm start
    ```
   or
   ```bash
   pnpm start
    ```
   or
   ```bash
   yarn start
    ```

3. **Endpoints:**

    (POST) => localhost:6969/ : Forward JSON-RPC requests to Ethereum nodes.

    (GET) => localhost:6969/ : Check the status and configuration of the proxy.

### Screenshot

![image](https://github.com/user-attachments/assets/102aad4f-db15-4df4-99d8-2882e984a19c)



