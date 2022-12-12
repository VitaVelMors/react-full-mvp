import pg from 'pg';
const { Pool } = pg;
const pool = new Pool({
  "dev":{"connectionString": 'postgresql://postgres:docker@127.0.0.1:5432/scoutdb',
  port: '5000'
  },
  "production":{
      connectionString:"postgres://scoutdb_9v4r_user:9pyKo4PAvHhWaebBziPGrIyAftHmAg65@dpg-cebjbrirrk0bbtf0hve0-a.ohio-postgres.render.com/scoutdb_9v4r" 
  }
})

export default pool