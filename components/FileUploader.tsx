'use client'
import { convertFileToUrl } from '@/lib/utils'
import Image from 'next/image'
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

type  FileUploaderProps = {
    files: File[] | undefined,
    onChange : (files : File[])=>void
}

 const FileUploader = ({files , onChange}:FileUploaderProps) => {
  const onDrop = useCallback((acceptedFiles : File[]) => {
    onChange(acceptedFiles)
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()} className='file-upload'>
      <input {...getInputProps()} />
        {
            files && files?.length>0 ? (
                <Image alt="image" src={convertFileToUrl(files[0])} width={1000} height={1000} className='max-h-[400px] overflow-hidden object-cover'/>
            ): (
                <>
                <Image alt="upload icon" src="/assets/icons/upload.svg" height={40} width={40}/>
                <div className='file-upload_label'>
                    <p className='text-14-regular'>
                        <span className='text-green-500'>Click to upload
                          </span> or drag and drop
                        
                    </p>
                    <p>SVG ,PNG,JPEG, JPG or GiF (max 800x400) </p>
                </div>
                </>
            )
        }
      
    </div>
  )
}

export default FileUploader