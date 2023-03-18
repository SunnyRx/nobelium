import Container from '@/components/Container'

export default function Custom404 () {
  // 定义正则表达式
  var regex = /^https?:\/\/sunnyrx\.com\/.*?\/([^\/]+)\/?$/;

  // 检查当前页面的URL是否匹配正则表达式
  var match = regex.exec(window.location.href);
  if (match) {
    // 如果匹配，重定向到新的URL
    var newUrl = "https://sunnyrx.com/" + match[1];
    window.location.replace(newUrl);
    return null;
  } else {
    // 如果不匹配，显示404页面
    return (
      <Container>
        <p style={{ textAlign: 'center', fontSize: '3em' }}>404 Not Found</p>
      </Container>
    )
  }
}