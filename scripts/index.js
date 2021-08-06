// Script to handle mobile menu dropdown
let mobileMenu = document.querySelector('#mobileMenu');
let mobileMenuDropdown = document.querySelector('#mobileMenuDropdown');
mobileMenu.addEventListener('click', () => {
  mobileMenuDropdown.classList.toggle('hidden');
});

// Script to insert weblog posts
let url = "https://api.hashnode.com";
let query = `
  query {
    user(username: "andrewbruner") {
      publication {
        posts(page: 0) {
          title
          slug
          dateAdded
          brief
        }
      }
    }
  }`;
let params = {
  method: 'post',
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: query,
  }),
};
fetch(url, params)
  .then(res => res.json())
  .then(data => {
    let weblogDiv = document.querySelector('#posts');
    let posts = data.data.user.publication.posts;
    for (let i = 0; i < 3; i++) {
      let date = new Date(posts[i].dateAdded);
      let day = date.getDate();
      let year = date.getFullYear();
      date = date.toDateString();
      date = `${day} ${date.slice(4, 7)} ${year}`;
      weblogDiv.children[i].firstElementChild.firstElementChild.lastElementChild.textContent = date;
      weblogDiv.children[i].lastElementChild.firstElementChild.firstElementChild.href = `https://andrewbruner.hashnode.dev/${posts[i].slug}`;
      weblogDiv.children[i].lastElementChild.firstElementChild.firstElementChild.firstElementChild.textContent = posts[i].title;
      weblogDiv.children[i].lastElementChild.lastElementChild.textContent = posts[i].brief;
    };
  });

// Script to keep copyright date current
let currentYear = new Date().getFullYear();
document.querySelector('.currentYear').textContent = currentYear;
