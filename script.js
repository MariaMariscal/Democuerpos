//GAME IDEA: You sing and if ur notes match the notes of the karaoke song you get coins. It is part social and part game bc you can share/follow but also use ur coins to unlock premium songs and stuff. You can also write ur own songs for other people to try and you can join (maybe live) competitions

const profileImgs = [
  "https://images.unsplash.com/photo-1546190255-451a91afc548?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=162&h=162",
  "https://images.unsplash.com/photo-1593626986521-f24d25d60103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=162&h=162",
  "https://images.unsplash.com/photo-1581467655410-0c2bf55d9d6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=162&h=162",
  "https://images.unsplash.com/photo-1581467655410-0c2bf55d9d6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&auto=format&fit=crop&w=162&h=162",
  "https://images.unsplash.com/photo-1432251407527-504a6b4174a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&auto=format&fit=crop&w=162&h=162",
  "https://images.unsplash.com/photo-1589199584418-9fb838d95188?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&auto=format&fit=crop&w=162&h=162",
  "https://images.unsplash.com/photo-1499464796999-4ced935b55da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&auto=format&fit=crop&w=162&h=162",
  "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
];
const profileImage = document.getElementById("profileimg");

function imgChange() {
  profileImage.src = profileImgs[Math.round(Math.random() * 8)];
}

imgChange();

const posts = document.querySelectorAll(".gallery-item");

posts.forEach((post) => {
  post.addEventListener("click", () => {
    //Get original image URL
    const imgUrl = post.firstElementChild.src.split("?")[0];
    //Open image in new tab
    window.open(imgUrl, "_blank");
  });
});

window.onLoad = function () {
  var profileUserName = document.getELementById("profile-user-name");
  profileUserName.innerHTML = username;

  var profileRealName = document.getELementById("profile-real-name");
  profileRealName.innerHTML = realName;

  var profileBioText = document.getELementById("profile-bio-text");
  profileBioText.innerHTML = yourBio;
};