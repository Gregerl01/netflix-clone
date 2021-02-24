const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e){
    removeBorder();
    removeShow();
    //Add border to current tab
    this.classList.add('tab-border');
    //Grab content item from DOM
    const tabContentItems = document.querySelector(`#${this.id}-content`);
    //Add show class
    tabContentItems.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}
//Listen for tab click
tabItems.forEach(item=> item.addEventListener('click', selectItem));




// Get modal element
const modal = document.getElementById('loginModal');
// Get open modal buttom
const modalBtn = document.getElementById('modalBtn');
// Get close modal buttom
const closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal)
// Listen for outside click
window.addEventListener('click', clickOutside);

// Function to open modal
function openModal(){
    modal.style.display = 'block';
}

// Function to close modal
function closeModal(){
    modal.style.display = 'none';
}

// Function to close modal if outside click
function clickOutside(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}

