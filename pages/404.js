import { useEffect } from 'react'
import { useLocale } from '@/lib/locale'
import Container from '@/components/Container'

export default function Page404 () {
  const isBrowser = typeof window !== 'undefined'
  const locale = useLocale()

  useEffect(() => {
    if (isBrowser) {
      // 定义正则表达式
      var regex = /^https?:\/\/sunnyrx\.com\/.*?\/([^\/]+)\/?$/;

      // 检查当前页面的URL是否匹配正则表达式
      var match = regex.exec(window.location.href);
      if (match) {
        // 如果匹配，重定向到新的URL
        var newUrl = "https://sunnyrx.com/" + match[1];
        window.location.replace(newUrl);
      }
    }
  }, [isBrowser])

  return (
    <Container>
      <h1 className="text-5xl text-black dark:text-white text-center">404</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 text-center">{locale.PAGE.ERROR_404.MESSAGE}</p>
    </Container>
  )

}