# tokyo-art-scene
Find the latest events around Tokyo

#### :exclamation: The project is being rewritten in [Preact](https://github.com/developit/preact), a "fast 3kb React alternative with the same ES6 API". 

### Current progress:

- [x] Small size. (<10kb)
- [x] Fast initial paint (<1s)
- [x] Popular events.
- [ ] Events sorted by area.
- [ ] Google Maps directions.
- [ ] Offline storage.
- [ ] Everything else.

## Words

The idea was simple. Fetch data from Tokyo Art Beat and display it in a unique (minimalist) way. 

To ensure a perfomant, lightweight application that abides with progressive web application best practices, I set two primary constraints for this project. Size and Speed.

#### frontend
The primary constraint for the project is keeping the initial load small. The total size, not counting event data, is less than 10kb. By using Preact, keeping components small and stateless I was able to accomplist this very easily. 

Following the first constraint, the second is relatively easy. This was accomplished in part thanks to Preact being light to begin with, but also thanks to some code I wrote for the backend.

#### backend
There was one problem. Tokyo Art beat's API respons with XML data. So using Node.js, I set up a cron job to fetch the data daily, convert it to JSON, clean it up and store it on Firebase for quick access.


Data provided by [Tokyo Art Beat](http://www.tokyoartbeat.com/)
