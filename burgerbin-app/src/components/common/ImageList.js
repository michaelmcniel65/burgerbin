import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Avatar, Tooltip, Typography } from '@mui/material';
import useFirestore from '../../useFirestore';
import moment from 'moment';

export default function StandardImageList() {
  const {documents} = useFirestore('gallery')
  return (
    <ImageList cols={1} rowHeight={400}>
      {documents.map((item) => (
        <ImageListItem key={item?.id}
        className="w-[25rem] object-cover">
          <img
            src={`${item?.data?.imageURL}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item?.data?.imageURL}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item?.data?.uName || item?.data?.uEmail}
            loading="lazy"
          />
          <Tooltip
            title={item?.data?.uName || item?.data?.uEmail}
            sx={{
                position: 'absolute',
                bottom: '3px',
                right: '3px',
            }}
          >
            <Avatar src={item?.data?.uPhoto} />
          </Tooltip>
          <Typography
            variant='body2'
            component='span'
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              color: 'white',
              background: 'rgba(0, 0, 0, .3)',
              p: '5px',
              borderTopRightRadius: 8,
            }}
          >
            {moment(new Date() - 500 * 60 * 60).fromNow()}
          </Typography>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

{/*add options and timestamp check part 1 and then check part 2 50 minutes in to connect it to firebase for accuracy 
left off at last section of part 2 "deleting images" need to add options and timestamp first
before we get too ahead of ourselves 

changing just to put something for sunday*/}