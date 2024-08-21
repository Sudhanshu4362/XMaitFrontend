import React from 'react'
import { Group, Input } from '@mantine/core';
import { FaSearch } from "react-icons/fa";
import { Button } from '@mantine/core';

const SearchBox = () => {
  return (
    <Group>
    <Input size="md" radius="md" placeholder="Input component" style={{width : "90vw"}}/>
    <Button variant="filled" style={{gap : 0}}><FaSearch/></Button>
    </Group>
  )
}

export default SearchBox