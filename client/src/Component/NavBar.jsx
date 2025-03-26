import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import PeopleIcon from '@mui/icons-material/People';
import ReorderIcon from '@mui/icons-material/Reorder';
import CheckIcon from '@mui/icons-material/Check';
import CameraIcon from '@mui/icons-material/Camera';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Tabs aria-label="Icon tabs" sx={{ '--Tabs-gap': '0px' }}>
      <TabList sx={{ '--List-decorator-size': '48px', height: '60px' }}>
        <Tab component={Link} to="/Users" sx={{ fontSize: '1.8rem' }}>
          <ListItemDecorator>
            <PeopleIcon sx={{ fontSize: '3rem' }} />
          </ListItemDecorator>
          Users
        </Tab>
        <Tab component={Link} to="/Todos" sx={{ fontSize: '1.8rem' }}>
          <ListItemDecorator>
            <CheckIcon sx={{ fontSize: '3rem' }} />
          </ListItemDecorator>
          Todos
        </Tab>
        <Tab component={Link} to="/Posts" sx={{ fontSize: '1.8rem' }}>
          <ListItemDecorator>
            <ReorderIcon sx={{ fontSize: '3rem' }} />
          </ListItemDecorator>
          Posts
        </Tab>
        <Tab component={Link} to="/Photos" sx={{ fontSize: '1.8rem' }}>
          <ListItemDecorator>
            <CameraIcon sx={{ fontSize: '3rem' }} />
          </ListItemDecorator>
          Photos
        </Tab>
      </TabList>
    </Tabs>
  );
}

export default NavBar;