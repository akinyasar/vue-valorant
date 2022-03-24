### Valorant-API & Auth Uygulamasında İstenenler


Bu uygulama ile bir yetkilendirme işlemi gerçekleştirilecek ve sonrasında belirtilen valorant API'sinden veriler listelenektir.


- Kullanıcı giriş yapmamış ise giriş yapabilir ya da kayıt olabilir.
- Kullanıcı giriş yapmamışsa giriş sayfası hariç hiçbir sayfaya erişememelidir.
- Kullanıcı giriş yaptıktan sonra yeniden uygulamaya girdiğinde kayıt/giriş sayfası ile karşılaşmamalıdır.
- Kullanıcı ana sayfaya geldiğinde 'Merhaba, `giriş yapan kullanıcı adı soyadı`' mesajıyla karşılaşmalıdır.
- Giriş sayfası hariç, diğer tüm sayfalarda bir navbar kullanarak bu navbar içerisinde; Ana Sayfa, Weapons, Agents sayfalarına yönlendirmeler yer almalıdır. 
- Weapons sayfasında Valorant API'den çekilecek olan 'weapons' verileri yer almalıdır.
- Agents sayfasında Valorant API'den çekilecek olan 'agents' verileri yer almalıdır.

- `Opsiyonel` Ana sayfanın boş kalmaması için ana sayfada 5-10 adet Weapons veya agents listelenebilir.

#### Kullanılması Gereken Teknolojiler

<details>
<summary>vue3</summary>

Bu uygulamada vue framework'ünün 3. versiyonu kullanılmalıdır. 

Vue, 3. versiyonu ile birlikte component yaşam döngüsü, reaktivite, tasarım vb. konularında oldukça gelişmiş özellikler sağlamaktadır. 

Bu uygulamada Vue3 framework'ü kullanılarak, kapsamlı bir component yapılandırılması beklenmektedir.
</details>

<details>
<summary>Vuex</summary>

Giriş yapan kullanıcının bilgilerini saklamak/değiştirmek için vuex kullanılmalıdır.

Aynı zamanda kullanıcının giriş yapıp yapmadığını belirlemek için de vuex kullanılmalıdır.
</details>

<details>
<summary>localStorage</summary>

Giriş yapan kullanıcının bilgilerini kalıcı olarak saklamak için localStorage kullanılmalıdır. 

> <details>
> <summary>İpucu</summary>
>
> Kullanıcının giriş yaptığı anda bilgilerini vuex store'a kaydederken localStorage'a kaydedip uygulama açıldığında bu bilgiler çekilebilir.

</details>

<details>
<summary>vue-router</summary>

Ana sayfa ve giriş yapma sayfalarını ayırmak için vue-router kullanılmalıdır. 

> <details>
> <summary>İpucu</summary>
>
> Kullanıcının giriş yapıp yapmama durumuna göre rota yönlendirmeleri için vuex ile birlikte 'Navigation Guards' kullanılabilir.
> </details>
>
> <details>
> <summary>Navbar hk.</summary>
>
> Navbar giriş sayfası hariç olmak üzere diğer tüm sayfalarda gösterilecektir. Bu, auth harici her sayfada Navbar'ı çağırarak yapılabilir. Ancak daha güzel bir kullanım için vue-router named-views'i araştırabilirsiniz.

</details>

</details>



<details>
<summary>json-server</summary>

Kullanıcı bilgileri gerçekte bir veritabanında tutulur. Bunu simüle etmek için proje ile birlikte gelen db.json dosyasını json-server ile ayağa kaldırıp, giriş/kayıt işlemlerini bu json dosyası üzerinden yapılmalıdır.
</details>

<details>
<summary>axios</summary>

json-server'a istek göndermek ve valorant API'den veri çekmek için axios kütüphanesi kullanılmalıdır.
</details>

<details>
<summary>Valorant API</summary>

Weapons ve Agents sayfalarında veri listelencektir. Bu verilere erişmek için https://dash.valorant-api.com adresinde yer alan Weapons ve Agents Endpoint'leri kullanılmalıdır.
</details>

<details>
<summary>Bootstrap - Opsiyonel</summary>

Güzel bir görünüm çıkartmak için Bootstrap kullanabilirsiniz. Ancak bu zorunlu değildir. İsterseniz başka bir tasarım kütüphanesi kullanabilir veya tasarımları kendiniz yazabilirsiniz.
</details>
