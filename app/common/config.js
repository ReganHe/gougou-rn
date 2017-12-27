const baseUrl = 'http://127.0.0.1:3001/'

export default {
  header: {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  },
  backup: {
    avatar: 'http://res.cloudinary.com/yanghe/image/upload/gougou.png'
  },
  qiniu: {
    video: 'http://p1iv33aof.bkt.clouddn.com/',
    thumb: 'http://p1iv33aof.bkt.clouddn.com/',
    avatar: 'http://p17nffcfn.bkt.clouddn.com/',
    upload: 'http://upload.qiniu.com'
  },
  cloudinary: {
    cloud_name: 'yanghe',
    api_key: '723954978127639',
    api_secret: 'OXJfk4Ypx96B5WC6w3f1W4c1FYE',
    base: 'http://res.cloudinary.com/yanghe',
    image: 'https://api.cloudinary.com/v1_1/yanghe/image/upload',
    video: 'https://api.cloudinary.com/v1_1/yanghe/video/upload',
    audio: 'https://api.cloudinary.com/v1_1/yanghe/raw/upload'
  },
  api: {
    creations: baseUrl + 'api/creations',
    comment: baseUrl + 'api/comments',
    up: baseUrl + 'api/up',
    video: baseUrl + 'api/creations/video',
    audio: baseUrl + 'api/creations/audio',
    signup: baseUrl + 'api/u/signup',
    verify: baseUrl + 'api/u/verify',
    update: baseUrl + 'api/u/update',
    signature: baseUrl + 'api/signature'
  }
}