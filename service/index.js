// Get the modal
var shareModal = document.getElementById('myShareModal')

// When the user clicks the button, open the modal
function openShareModal() {
  shareModal.style.display = 'block'
}

// When the user clicks on <span> (x), close the modal
function closeShareModal() {
  shareModal.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == shareModal) {
    shareModal.style.display = 'none'
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0]

// Copy to clipboard functionallity
function copyToClipboard() {
  var copyText = document.createElement('input')
  copyText.setAttribute('value', window.location.href) /* Property Link Goes Here */
  document.body.appendChild(copyText)
  copyText.select()
  document.execCommand('copy')
  document.body.removeChild(copyText)
  alert('Link copied to clipboard!')
}

// Initialize Swiper
const swiper = new Swiper('.mySwiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

/* JavaScript snippet will evaluate the most recent LCP element and log a warning if it was lazy-loaded. */
new PerformanceObserver((list) => {
  const latestEntry = list.getEntries().at(-1)

  if (latestEntry?.element?.getAttribute('loading') == 'lazy') {
    console.warn('Warning: LCP element was lazy loaded', latestEntry)
  }
}).observe({ type: 'largest-contentful-paint', buffered: true })
