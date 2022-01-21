import { SiteItem } from "./SiteItem";
import '../styles/sites.scss';

export function SiteList(){

    const sedes = [
        'aamar',
        'aamo',
        'ab',
        'abac',
        'abn',
        'abs',
        'abc',
        'ac',
        'ace',
        'aceam',
        'acp',
        'acsr',
        'aes',
        'alm',
        'ama',
        'amt',
        'amc',
        'aml',
        'ams',
        'anpa',
        'ansr',
        'anc',
        'anp',
        'aop',
        'apac',
        'apv',
        'apl',
        'apo',
        'apse',
        'apso',
        'aps',
        'ap',
        'ape',
        'apec',
        'aplac',
        'arj',
        'arf',
        'ars',
        'asur',
        'aspa',
        'ases',
        'asm',
        'asp',
        'asr',
        'misal',
        'mbs',
        'mto',
        'mmn',
        'mmo',
        'mne',
        'mnem',
        'mnsr',
        'mopa',
        'misom',
        'mpa',
        'mpi',
        'ms',
        'msma',
        'ucb',
        'ucob',
        'ulb',
        'uneb',
        'unob',
        'unb',
        'useb',
        'usb',
        'aac',
        'aan',
        'aas',
        'abo',
        'acsch',
        'amch',
        'anop',
        'apc',
        'apce',
        'asach',
        'mac',
        'maco',
        'mano',
        'mbc',
        'mbo',
        'mibon',
        'mcch',
        'micop',
        'mchp',
        'mlt',
        'mob',
        'mop',
        'men',
        'mes',
        'mno',
        'mnch',
        'mpcs',
        'mpn',
        'mps',
        'msmch',
        'msop',
        'ua',
        'ub',
        'uch',
        'ue',
        'up',
        'upn',
        'upsur',
        'uu',
      ];
      
    return (
        <section className="site-list">
            <h1>Versão do thema</h1>

            <table>
                <thead>
                    <tr>
                        <th>Campo:</th>
                        <th>Parent:</th>
                        <th>Child:</th>
                    </tr>
                </thead>
                <tbody>

                    {sedes.map((item) => <SiteItem key={item} site={item} /> )}

                </tbody>

                </table>
        </section>
    );
}