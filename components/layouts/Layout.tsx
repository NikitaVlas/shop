// eslint-disable-next-line @typescript-eslint/quotes
import Header from '../modules/Header/Header'

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    {children}
  </>
)

export default Layout
