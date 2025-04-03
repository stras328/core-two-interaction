var entries = [
  {
    "letter": "a",
    "image": "https://file.garden/Zc6v_enOJ3-bBJBn/interaction-%20P3/red/a_red_1.png"
  },
  {
    "letter": "b",
    "image": "https://file.garden/Zc6v_enOJ3-bBJBn/interaction-%20P3/purple/b_purple_2.png"
  },
  {
    "letter": "c",
    "image": "https://file.garden/Zc6v_enOJ3-bBJBn/interaction-%20P3/green/c_green_1.png"
  },
  {
    "letter": "d",
    "image": "https://file.garden/Zc6v_enOJ3-bBJBn/interaction-%20P3/purple/d_purple_1.png"
  },
  {
    "letter": "e",
    "image": "https://file.garden/Zc6v_enOJ3-bBJBn/interaction-%20P3/red/e_red_1.png"
  },
  {
    "letter": "f",
    "image": "https://file.garden/Zc6v_enOJ3-bBJBn/interaction-%20P3/orange/f_orange_1.png"
  },
  {
    "letter": "g",
    "image": "https://file.garden/Zc6v_enOJ3-bBJBn/interaction-%20P3/blue/g_blue_1.png"
  },
  {
    "letter": "h",
    "image": "https://file.garden/Zc6v_enOJ3-bBJBn/interaction-%20P3/yellow/h_yellow_2.png"
  },
  {
    "letter": "i",
    "image": "https://file.garden/Zc6v_enOJ3-bBJBn/interaction-%20P3/blue/i_blue_1.png"
  },
  {
    "letter": "j",
    "image": "https://file.garden/Zc6v_enOJ3-bBJBn/interaction-%20P3/pink/j_pink_1.png"
  },
  {
    "letter": "k",
    "image": "https://file.garden/Zc6v_enOJ3-bBJBn/interaction-%20P3/yellow/k_yellow_1.png"
  },
  {
    "letter": "l",
    "image": "https://file.garden/Zc6v_enOJ3-bBJBn/interaction-%20P3/pink/L_pink_1.png"
  },
  {
    "letter": "m",
    "image": "https://file.garden/Zc6v_enOJ3-bBJBn/interaction-%20P3/yellow/m_yellow_1.png"
  },
  {
    "letter": "n",
    "image": "https://file.garden/Zc6v_enOJ3-bBJBn/interaction-%20P3/orange/n_orange_1.png"
  },
  {
    "letter": "o",
    "image": "https://file.garden/Zc6v_enOJ3-bBJBn/interaction-%20P3/green/o_green_1.png"
  },
  {
    "letter": "p",
    "image": "https://file.garden/Zc6v_enOJ3-bBJBn/interaction-%20P3/red/p_red_1.png"
  },
  {
    "letter": "q",
    "image": "https://file.garden/Zc6v_enOJ3-bBJBn/interaction-%20P3/green/q_green_1.png"
  },
  {
    "letter": "r",
    "image": "https://file.garden/Zc6v_enOJ3-bBJBn/interaction-%20P3/green/r_green_1.png"
  },
  {
    "letter": "s",
    "image": "https://file.garden/Zc6v_enOJ3-bBJBn/interaction-%20P3/blue/s_blue_1.png"
  },
  {
    "letter": "t",
    "image": "https://file.garden/Zc6v_enOJ3-bBJBn/interaction-%20P3/yellow/t_yellow_1.png"
  },
  {
    "letter": "u",
    "image": "https://file.garden/Zc6v_enOJ3-bBJBn/interaction-%20P3/green/u_green_1.png"
  },
  {
    "letter": "v",
    "image": "https://file.garden/Zc6v_enOJ3-bBJBn/interaction-%20P3/red/v_red_1.png"
  },
  {
    "letter": "w",
    "image": "https://file.garden/Zc6v_enOJ3-bBJBn/interaction-%20P3/yellow/w_yellow_1.png"
  },
  {
    "letter": "x",
    "image": "https://file.garden/Zc6v_enOJ3-bBJBn/interaction-%20P3/yellow/x_yellow_1.png"
  },
  {
    "letter": "y",
    "image": "https://file.garden/Zc6v_enOJ3-bBJBn/interaction-%20P3/yellow/y_yellow_1.png"
  },
  {
    "letter": "z",
    "image": "https://file.garden/Zc6v_enOJ3-bBJBn/interaction-%20P3/pink/z_pink_1.png"
  },
  {
    "letter": " ",
    "image": "https://file.garden/Zc6v_enOJ3-bBJBn/interaction-%20P3/space_01.png"  
  }
];

// Get output element and intro text
var output = document.querySelector('.output');
var introText = document.getElementById('intro-text');

// Hide intro text once the user starts typing
window.addEventListener('keydown', () => {
  introText.classList.add('hidden');  // Add 'hidden' class to fade out the intro text
});


// Get output element
var output = document.querySelector('.output');

window.addEventListener('keydown', (event) => {
  console.log(event.key);
  
  // Get the letter
  var letter = event.key;
  
  // Get the matching entry
  var matchingEntry = entries.find((entry) => {
    return entry.letter === letter;
  });
  
  
  // Put it in the DOM
  if (matchingEntry) {
    // Create image element
    var img = document.createElement('img');
    img.src = matchingEntry.image;
    img.classList.add('image');  // Add the .image class

    // Append the image to the output element
    output.appendChild(img);

    // Add a click event listener to replace the image with the letter
    img.addEventListener('click', () => {
      // Replace the image with the corresponding letter
      var letterElement = document.createElement('span');
      letterElement.textContent = matchingEntry.letter;
      letterElement.classList.add('letter');  // Optionally add a class for styling
      
      // Replace the image with the letter
      output.replaceChild(letterElement, img);

      // After 1 second, replace the letter back with the image
      setTimeout(() => {
        output.replaceChild(img, letterElement);
      }, 1500);
    });
  }
});
