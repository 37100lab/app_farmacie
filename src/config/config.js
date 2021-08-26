export const url =
  process.env.NODE_ENV === 'development'
    ? 'http://192.168.1.15:8080/geoserver/geoapp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geoapp:farmacie&outputFormat=application/json'
    : `https://37100lab.it/geoserver/geoapp/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=geoapp:farmacie&outputFormat=application/json`
