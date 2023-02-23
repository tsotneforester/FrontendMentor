//      ,    ,
//   ,@▒▒╜  ╣▒║╖     ▄▓█████  ▐██████▄ ▐██▌  ██▓       ▄█████▌  ███████`
// ╓╣▒▒╜ @╝╣╖`╢▒▒╗   ███"---  ▐██▌-███` █▓█▄███▀      ▐██▌---   ███▌,,
// ╢▒▒╖  ╢╗@╝  ╢▒▒╝  ███  ███ ▐███████  ▄▓█▓▓█▄       ▐██▌ ▐██▌ ██████
//  ╙╢▒╢╖ ║╜,╢▒▒╝    ███▄▄███ ▐██▌--`  ▐██▌ ▐███ ▓███ ▐███▄███▌ ███▄▄▄▄
//    `╢▒╜  ╣▒╜       ▀▀▀▀▀▀▀ '▀▀`     '▀▀`  ▀▀▀ ╙▀▀▀   ▀▀▀▀▀▀  ▀▀▀▀▀▀▀
"use strict";
const submit = document.getElementById("submit");
const input = document.querySelector("input");
fetchApi("tsotneforester");
submit.addEventListener("click", function () {
  fetchApi(input.value);
});

async function fetchApi(name) {
  try {
    let step1 = await fetch(`https://api.github.com/users/${name}`);
    if (step1.status == "404") {
      createError("No result");
      throw "No profile with this username";
    } else {
      let step2 = await step1.json();
      let result = { ...step2, name: step2.name ? step2.name : step2.login, created_at: datefy(step2.created_at), bio: step2.bio ? step2.bio : "This profile has no bio", twitter_username: step2.twitter_username ? [step2.twitter_username, ""] : ["Not Available", "gray"], company: step2.company ? step2.company : "@Personal", location: step2.location ? [step2.location, ""] : ["Unavalable", "gray"], blog: step2.blog ? step2.blog : step2.html_url };
      createCard(result);
      console.log(result);
    } //twitter_username
  } catch (e) {
    console.log(e);
  }
}

function createCard(data) {
  let node = `<div class="avatar">
        <img src="${data.avatar_url}" alt="${data.login}" />
      </div>
      <div class="user">
        <h2>${data.name}</h2>
        <h6>@${data.login}</h6>
        <h3>Joined ${data.created_at}</h3>
      </div>
      <div class="details">
        <div class="bio">
            ${data.bio}
        </div>
        <div class="rff">
          <div class="repo">
            <span class="heading">Repos</span>
            <span class="count">${data.public_repos}</span>
          </div>
          <div class="ers">
            <span class="heading">Followers</span>
            <span class="count">${data.followers}</span>
          </div>
          <div class="ing">
            <span class="heading">Following</span>
            <span class="count">${data.following}</span>
          </div>
        </div>
        <div class="social">
          <section>
            <div class="line ${data.location[1]}" id="town">
              <div class="img"><img src="assets/pin.png" alt="pin" /></div>
              <span>${data.location[0]}</span>
            </div>
            <div class="line" id="url">
              <div class="img"><img src="assets/url.png" alt="url" /></div>
                <a href="${data.blog}">${http(data.blog)}</a>
            </div>
          </section>
          <section>
            <div class="line ${data.twitter_username[1]}" id="twitter">
              <div class="img"><img src="assets/twitter.png" alt="twitter" /></div>
              <span>${data.twitter_username[0]}</span>
            </div>
            <div class="line" id="work">
              <div class="img"><img src="assets/work.png" alt="work" /></div>
              <span>${data.company}</span>
            </div>
          </section>
        </div>
        </div>
      </div>`;
  document.querySelector("main").innerHTML = node;
}
//${data.twitter_username}
function createError(text) {
  document.querySelector(".error").innerHTML = text;
  input.value = "";
}

function datefy(dt) {
  const date = new Date(dt);
  return `${date.toLocaleString("en-US", { day: "numeric" })} ${date.toLocaleString("en-US", { month: "short" })} ${date.toLocaleString("en-US", { year: "numeric" })}`;
}

function http(link) {
  let array = link.split("//");
  return array[1];
}
http("http://otarza.space");
console.log(http("http://otarza.space"));
