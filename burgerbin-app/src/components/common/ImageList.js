import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Avatar, Tooltip, Typography } from '@mui/material';
import useFirestore from '../../firebase/useFirestore';
import moment from 'moment';
import ImageOptions from './ImageOptions';

export default function StandardImageList() {
  const {documents} = useFirestore('gallery')
  return (
    <div className='w-full flex justify-center'>
    <div>
    <ImageList
      cols={1} rowHeight={400} gap={0}
      sx={{
        width: 'auto',
        maxWidth: 400,
        objectFit: 'cover',
        gridTemplateColumns:
          'repeat(1, minmax(0, 1fr))!important',
      }}
    >
      {documents.map((item) => (
        <>
        <div className='h-[50px] bg-gray-200 rounded-t-3xl flex justify-between'>
          <div className='flex flex-row'>
            <Tooltip
                title={item?.data?.uName || item?.data?.uEmail}
                sx={{
                    top: '5px',
                    left: '5px',
                }}
              >
                <Avatar src={item?.data?.uPhoto} />
            </Tooltip>
            <h1 className='p-4'>{item?.data?.uName}</h1>
          </div>
          <div className='p-2'>
            <ImageListItem>
              <ImageOptions imageId={item?.data?.imageId}/> {/*Problem 1 (marked in notes)*/}
            </ImageListItem>
          </div>
        </div>
        <ImageListItem key={item?.id}>
          <img
            src={`${item?.data?.imageURL}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item?.data?.imageURL}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item?.data?.uName || item?.data?.uEmail}
            loading="lazy"
          />
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
            {moment(item?.data?.timestamp?.toDate()).fromNow()}
          </Typography>
        </ImageListItem>
        <div className='h-[70px] bg-gray-200 rounded-b-3xl mb-5'></div>
        </>
      ))}
    </ImageList>
    </div>
    </div>
  );
}