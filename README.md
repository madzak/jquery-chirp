# Chirp Chirp Baby
The goal of chirp is to provide a dead simple way using jQuery to pull the latest tweets. It's primary focus is to just get some tweets very easily and allow you full control of to style them as you see fit. It does not provide any styling out of the box, your renderCallback function will do all that work. You will just get the twitter search results to do what you will with them.

## Usage
```javascript
  $(function() {
      Chirp.fetchTweets('madzak', 3, function(tweets) {
          for(var x=0,len = tweets.length; x < len; x++) {
              var tweet = $('<li></li>'),
                  container = $('<p></p>'),
                  date = new Date(tweets[x].created_at),
                  message = tweets[x].text;

              tweet.append($('<p></p>').addClass("date").html(date.toDateString()));
              tweet.append($('<p></p>').html(message));

              $('#tweet-list').append(tweet);
          } 
      });
  });
```

## Example Output
```html
  <ul id="tweet-list" class="unstyled">
    <li>
      <p class="date">Fri Feb 17 2012</p>
      <p>Come on. Client side is a perfectly viable platform. Cant help if developer sucks... @garybernhardt @sleekslush</p>
    </li>
    <li>
      <p class="date">Fri Feb 17 2012</p>
      <p>Hahaha "@benjaminws: @sleekslush @garybernhardt trollolololol"</p>
    </li>
    <li>
      <p class="date">Fri Feb 17 2012</p>
      <p>I got sick of all the twitter implementations so i wrote a simple one that works. https://t.co/Pq0iLXO7</p>
    </li>
  </ul>
```