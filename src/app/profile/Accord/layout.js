import '../vendor/bootstrap/css/bootstrap.css';
export const metadata = {
    title: 'dashborad',
    description: 'Generated by create next app',
  }
  


  export default function RootLayout({ children }) {
    return (
  
      <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"/>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
      
        {children}
      </div>
    )
  }
  