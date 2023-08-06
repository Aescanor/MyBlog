import './Footer.scss';

const Footer = () => {

    const currentYear = new Date().getFullYear()

  return (
    <footer>
            <p>&copy; {currentYear} MyBlog - Dammaretz Gaëtan - Tous droits réservés</p>
    </footer>
  )
}

export default Footer