import React, { useContext } from 'react';
import { Header, Menu } from 'semantic-ui-react';
import { InstructionsContext } from '../../services/InstructionsContext';

const Title = () => {
    const { botName } = useContext(InstructionsContext);

    return <Header size="large" content={`${botName}, an SA Forums Bot`} />;
};

const menuItems = [<Title />].map((element, index) => (
    <Menu.Item key={index}>{element}</Menu.Item>
));

const TopBar = () => <Menu children={menuItems} color="green" inverted />;

export default TopBar;
