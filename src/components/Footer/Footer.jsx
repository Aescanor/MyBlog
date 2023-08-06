import './Footer.scss';

const Footer = () => {

    const currentYear = new Date().getFullYear()

  return (
    <footer>
            <p>&copy; {currentYear} MyBlog - Tous droits réservés</p>
            <p>MyBlog - {currentYear}</p>
    </footer>
  )
}

export default Footer