import Head from "next/head";
import Image from "next/image";
import {initFirebase} from '../../lib/firebase/firebase'
import styles from "@/styles/Home.module.css";
import WriteToCloudFirestore from "../../components/cloudFirestore/Write";

initFirebase()

export default function Home() {
    return (
        <>
            <Head>
                <title>
                    Real Estate Agency - Your One Stop Shop for Buying and
                    Selling Properties
                </title>

                <meta
                    name="description"
                    content="We are a real estate agency that helps clients buy and sell properties."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.h1}>Find Your Dream Home</h1>
            </main>
        <WriteToCloudFirestore />

            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, repudiandae a, laborum sed, unde corrupti doloremque totam voluptates eos inventore aperiam velit suscipit impedit cum culpa ipsam quod error officiis.
            Repellat eum voluptatibus a illum eius fugit id adipisci odit distinctio, nihil eveniet, vel itaque at modi voluptas sequi autem! Libero accusantium dolores cumque nostrum ipsa tempore expedita neque asperiores.
            Incidunt fugit velit nostrum eveniet natus nulla veritatis quas dolore iure quam doloribus, laudantium, corrupti iste repellat suscipit architecto, voluptatibus a aliquam deserunt ex dicta dignissimos in vitae. Eveniet, ipsam.
            Eius quis dolor mollitia sapiente! Nobis nulla animi itaque sit vitae. Tempore adipisci delectus nam eaque voluptate, labore minus iusto facere corrupti neque accusantium quibusdam dicta nulla assumenda ea ex?
            Impedit iste minima obcaecati officia! Sequi iure eos voluptate reiciendis repudiandae labore fuga vitae! Quaerat aut eos nesciunt sequi nam blanditiis, ex ut tenetur sit vel fugit dolores obcaecati iure!
            Aspernatur deleniti quo, accusantium sapiente voluptate amet aut repudiandae magnam, repellendus, fugit mollitia quas nobis possimus quidem? Nemo cum nobis voluptate neque facilis tenetur, sint voluptatem repellendus, quas sapiente dolorum?
            Nam nihil fugiat sapiente atque dolore. Mollitia, ullam aut? Ad repellendus earum fuga recusandae ipsa harum magni sunt nisi similique aliquam ipsam consequatur error nemo eos, et necessitatibus. Nihil, enim.
            Culpa illo veritatis eligendi vitae voluptas reiciendis nulla nihil nisi, sapiente id excepturi nobis ipsa rerum debitis! Repudiandae hic, accusamus necessitatibus dolor provident nesciunt beatae delectus sed adipisci ad odio.
            Molestias tempora optio fugit voluptatum illo officiis autem obcaecati recusandae laboriosam repudiandae provident sunt quidem et dicta, eius illum odio ipsam deleniti asperiores sequi itaque nesciunt repellat mollitia! Saepe, doloribus!
            Voluptatibus eius debitis inventore reiciendis qui, perspiciatis aperiam sint molestiae nobis velit aspernatur? Tempora expedita debitis ad saepe enim ab iure, beatae perspiciatis quis voluptatum eligendi. Quas alias autem aliquid!
            Obcaecati dolorum, ratione error facilis laudantium adipisci distinctio, inventore nostrum tenetur recusandae provident necessitatibus sapiente ullam facere, vitae quia. Iure laboriosam quasi at laborum ex sunt quas ratione omnis eius.
            Soluta, architecto? Quidem quod facere quasi assumenda voluptas ex, reiciendis sit? Sunt provident assumenda sit minima, ad dicta pariatur nulla doloribus tenetur expedita qui, illum quos exercitationem, modi unde aliquam!
            Doloribus eligendi obcaecati minima sint eaque sapiente. Accusamus, fugit neque deleniti ut nihil tenetur consequatur necessitatibus odit, rerum dolore quibusdam adipisci sit saepe totam. Quis hic sapiente magni consectetur consequuntur?
            Placeat quibusdam autem delectus harum iure doloremque vero quos ea labore, sed deserunt fugiat hic explicabo! Ea, laudantium dicta! Ad nobis ea modi accusantium quos sit pariatur, molestias quam animi!
            Animi ab incidunt debitis optio ad at illum commodi quam cupiditate ratione praesentium atque officia, accusantium eaque rerum exercitationem quis eligendi recusandae quo laudantium! Cupiditate nisi magnam facilis inventore quisquam.
            Cupiditate at eos quam est odio nulla quo, quis quia expedita alias autem sit atque dicta consequuntur laudantium commodi ea excepturi nesciunt sunt iusto! Dicta corrupti dolorem sunt doloribus non?
            Cumque voluptate praesentium eveniet nobis eum, saepe odio qui voluptatum ea mollitia! Totam ab perferendis nobis commodi quidem ipsam porro est, facilis neque, mollitia numquam? Vero veniam perspiciatis hic error?
            Repellat modi aut asperiores nesciunt consequatur debitis, commodi, quasi quibusdam sequi velit eum inventore quae eos id cum esse doloribus harum dicta magni nisi ex placeat? Placeat neque libero voluptates!
            Eligendi cupiditate nesciunt perferendis animi laudantium debitis ipsa commodi placeat explicabo ullam? Consequuntur ea accusantium autem dignissimos, distinctio eum quis quam sed architecto. Ullam, eligendi neque dolor excepturi velit consequatur.
            Sed autem numquam harum recusandae iusto provident dolores magnam fuga expedita nisi, vitae, laudantium similique id totam assumenda est at quos, excepturi blanditiis eos facere culpa animi? Obcaecati, soluta veritatis.
            </div>


            
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, repudiandae a, laborum sed, unde corrupti doloremque totam voluptates eos inventore aperiam velit suscipit impedit cum culpa ipsam quod error officiis.
            Repellat eum voluptatibus a illum eius fugit id adipisci odit distinctio, nihil eveniet, vel itaque at modi voluptas sequi autem! Libero accusantium dolores cumque nostrum ipsa tempore expedita neque asperiores.
            Incidunt fugit velit nostrum eveniet natus nulla veritatis quas dolore iure quam doloribus, laudantium, corrupti iste repellat suscipit architecto, voluptatibus a aliquam deserunt ex dicta dignissimos in vitae. Eveniet, ipsam.
            Eius quis dolor mollitia sapiente! Nobis nulla animi itaque sit vitae. Tempore adipisci delectus nam eaque voluptate, labore minus iusto facere corrupti neque accusantium quibusdam dicta nulla assumenda ea ex?
            Impedit iste minima obcaecati officia! Sequi iure eos voluptate reiciendis repudiandae labore fuga vitae! Quaerat aut eos nesciunt sequi nam blanditiis, ex ut tenetur sit vel fugit dolores obcaecati iure!
            Aspernatur deleniti quo, accusantium sapiente voluptate amet aut repudiandae magnam, repellendus, fugit mollitia quas nobis possimus quidem? Nemo cum nobis voluptate neque facilis tenetur, sint voluptatem repellendus, quas sapiente dolorum?
            Nam nihil fugiat sapiente atque dolore. Mollitia, ullam aut? Ad repellendus earum fuga recusandae ipsa harum magni sunt nisi similique aliquam ipsam consequatur error nemo eos, et necessitatibus. Nihil, enim.
            Culpa illo veritatis eligendi vitae voluptas reiciendis nulla nihil nisi, sapiente id excepturi nobis ipsa rerum debitis! Repudiandae hic, accusamus necessitatibus dolor provident nesciunt beatae delectus sed adipisci ad odio.
            Molestias tempora optio fugit voluptatum illo officiis autem obcaecati recusandae laboriosam repudiandae provident sunt quidem et dicta, eius illum odio ipsam deleniti asperiores sequi itaque nesciunt repellat mollitia! Saepe, doloribus!
            Voluptatibus eius debitis inventore reiciendis qui, perspiciatis aperiam sint molestiae nobis velit aspernatur? Tempora expedita debitis ad saepe enim ab iure, beatae perspiciatis quis voluptatum eligendi. Quas alias autem aliquid!
            Obcaecati dolorum, ratione error facilis laudantium adipisci distinctio, inventore nostrum tenetur recusandae provident necessitatibus sapiente ullam facere, vitae quia. Iure laboriosam quasi at laborum ex sunt quas ratione omnis eius.
            Soluta, architecto? Quidem quod facere quasi assumenda voluptas ex, reiciendis sit? Sunt provident assumenda sit minima, ad dicta pariatur nulla doloribus tenetur expedita qui, illum quos exercitationem, modi unde aliquam!
            Doloribus eligendi obcaecati minima sint eaque sapiente. Accusamus, fugit neque deleniti ut nihil tenetur consequatur necessitatibus odit, rerum dolore quibusdam adipisci sit saepe totam. Quis hic sapiente magni consectetur consequuntur?
            Placeat quibusdam autem delectus harum iure doloremque vero quos ea labore, sed deserunt fugiat hic explicabo! Ea, laudantium dicta! Ad nobis ea modi accusantium quos sit pariatur, molestias quam animi!
            Animi ab incidunt debitis optio ad at illum commodi quam cupiditate ratione praesentium atque officia, accusantium eaque rerum exercitationem quis eligendi recusandae quo laudantium! Cupiditate nisi magnam facilis inventore quisquam.
            Cupiditate at eos quam est odio nulla quo, quis quia expedita alias autem sit atque dicta consequuntur laudantium commodi ea excepturi nesciunt sunt iusto! Dicta corrupti dolorem sunt doloribus non?
            Cumque voluptate praesentium eveniet nobis eum, saepe odio qui voluptatum ea mollitia! Totam ab perferendis nobis commodi quidem ipsam porro est, facilis neque, mollitia numquam? Vero veniam perspiciatis hic error?
            Repellat modi aut asperiores nesciunt consequatur debitis, commodi, quasi quibusdam sequi velit eum inventore quae eos id cum esse doloribus harum dicta magni nisi ex placeat? Placeat neque libero voluptates!
            Eligendi cupiditate nesciunt perferendis animi laudantium debitis ipsa commodi placeat explicabo ullam? Consequuntur ea accusantium autem dignissimos, distinctio eum quis quam sed architecto. Ullam, eligendi neque dolor excepturi velit consequatur.
            Sed autem numquam harum recusandae iusto provident dolores magnam fuga expedita nisi, vitae, laudantium similique id totam assumenda est at quos, excepturi blanditiis eos facere culpa animi? Obcaecati, soluta veritatis.
            </div>
        </>
    );
}
