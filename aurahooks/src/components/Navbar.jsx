import { Layout, Menu } from 'antd';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Logo } from '../Styles';
const { Header } = Layout;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

    const items = [
        {
            key: 1,
            label: "Registro",
            pathname: '/',
            onClick: ()=> navigate("/")
        },
        {
            key: 2,
            label: "Productos",
            pathname: '/products',
            onClick: ()=> navigate("/products")
        }
    ]
  return (
    <Header>
        <Logo src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1654276792/AuraHooks/Logo_transparente_hktm8f.png" />
        <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={String((items.find(i => i.pathname === location.pathname)).key)}
        items={items}
      />
    </Header>
  )
}

export default Navbar;