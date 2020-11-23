import request from './request'


/**
 * 文件上传
 */
export function uploadImg(data) {
    return request({
        url: '/user/fileUpload',
        method: 'post',
        data,
        dataType: 'data/formdata',
    })
}