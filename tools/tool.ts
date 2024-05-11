
export function scrollToSection(sectionId: string, offsetY?: number) {
    const section = document.getElementById(sectionId);
    if(!offsetY){
      offsetY = 0
    }

    if (section) {
      const y = section.getBoundingClientRect().top + window.pageYOffset + offsetY;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }


// need to be declare
export function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}