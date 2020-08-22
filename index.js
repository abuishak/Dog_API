'use strict';

function getDogImage() {
  const number =$("#number-of-dog").val()
  fetch(`https://dog.ceo/api/breeds/image/random/${number}`)

    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  const imageUrls = responseJson.message
  

const myImageTags = imageUrls.map(url => "<img src='" + url + "'class='.results-img'/>")

//console.log(myImageTags)
$('.results-img').remove()
$('.results').append(myImageTags)
 
 $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});