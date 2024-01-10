import ReactDOM from 'react-dom';

const PortalComponent = ({ children }) => {
    const portalModalEl = document.body
    return ReactDOM.createPortal(
      children,
      portalModalEl
    )
}
export default PortalComponent