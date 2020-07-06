import React, { useContext } from 'react';
import { Header, Menu } from 'semantic-ui-react';
import { InstructionsContext } from '../../services/InstructionsContext';

const Title = () => {
    const { botName } = useContext(InstructionsContext);

    return <Header size="large" content={`${botName}, an SA Forums Bot`} />;
};

const InstructionsLink = () => <a href={'https://jacobwicks.github.io/2020/07/01/forums-posting-bot.html'} target="_blank" rel="noopener noreferrer">
            How to run your own forums bot
        </a>
};

const menuItems = [<Title />].map((element, index) => (
    <Menu.Item key={index}>{element}</Menu.Item>
));

const TopBar = () => <Menu children={menuItems} color="green" inverted />;

export default TopBar;
