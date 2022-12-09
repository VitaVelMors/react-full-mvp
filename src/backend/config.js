const dev = {
  connectionString: 'postgresql://postgres:docker@127.0.0.1:5432/disney',
  port: '5000'
};
const production = {
  connectionString: process.env.POSTGRES_CONNECTION_STRING + "?ssl=true",
  port: process.env.PORT
};

export default config