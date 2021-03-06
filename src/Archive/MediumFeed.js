import React from "react";
const Parser = require("rss-parser");
const parser = new Parser();

export const MediumFeed = () => {
  const [data, setData] = React.useState();
  const [, setError] = React.useState(false);
  const [, setLoading] = React.useState(true);
  const feed_url = `https://medium.com/feed/@steven_creates`;
  const CORS_PROXY = `https://cors-anywhere.herokuapp.com/`;

  React.useEffect(() => {
    (async () => {
      try {
        let feed = await parser.parseURL(CORS_PROXY + feed_url);
        setData(feed);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    })();
  }, []);

  return (
    <div>
      {data && (
        <div>
          {data.items.map((medium) => (
            <div>{medium.title}</div>
          ))}
        </div>
      )}
    </div>
  );
};
