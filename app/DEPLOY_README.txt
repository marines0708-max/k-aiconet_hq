═══════════════════════════════════════════════════════════════
  K-AI CONET PWA — 배포 가이드
  K-AI CONET, Inc. | www.k-aiconet.com
  EIN: 35-2958214 | New York, USA
═══════════════════════════════════════════════════════════════

【파일 구조 — Vercel/서버에 업로드】
/
├── index.html          ← 메인 앱 (k-aiconet-app.html 파일 이름 변경)
├── manifest.json       ← PWA 매니페스트
├── sw.js               ← 서비스 워커 (오프라인 지원)
├── favicon.ico         ← 파비콘 (icon-32x32.png 복사)
├── icons/
│   ├── icon-16x16.png
│   ├── icon-32x32.png
│   ├── icon-48x48.png
│   ├── icon-72x72.png
│   ├── icon-96x96.png
│   ├── icon-128x128.png
│   ├── icon-144x144.png
│   ├── icon-152x152.png
│   ├── icon-180x180.png    ← Apple Touch Icon
│   ├── icon-192x192.png    ← Android Maskable
│   ├── icon-256x256.png
│   ├── icon-384x384.png
│   └── icon-512x512.png    ← Splash Screen

【index.html <head> 태그 안에 추가할 코드】
─────────────────────────────────────────
<link rel="manifest" href="/manifest.json">
<link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-180x180.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="K-AI CONET">
<meta name="theme-color" content="#0a0f1e">
─────────────────────────────────────────

【Service Worker 등록 코드 (</body> 직전)】
─────────────────────────────────────────
<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('SW registered:', reg.scope))
      .catch(err => console.log('SW error:', err));
  });
}
</script>
─────────────────────────────────────────

【Vercel 배포 순서】
1. GitHub 저장소에 위 파일들 업로드
2. Vercel dashboard → k-aiconet-hq 프로젝트 → Git push 시 자동 배포
3. 또는 Vercel CLI: vercel --prod

【앱 설치 확인 방법】
Android: Chrome → 주소창 오른쪽 설치 아이콘 클릭
iPhone:  Safari → 하단 공유버튼 → "홈 화면에 추가"

【투자자 공유 링크】
https://k-aiconet.com
(설치 유도 문구 예: "아래 링크를 Safari/Chrome으로 열고 홈 화면에 추가하세요")

─────────────────────────────────────────
K-AI CONET, Inc. | marines0708@gmail.com
+1-332-254-9709 | 142 W 57th St, New York NY 10019
═══════════════════════════════════════════════════════════════
