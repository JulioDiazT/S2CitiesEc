import { useTranslation } from 'react-i18next';
import '../i18n';
import './vision.css';

const Vision = () => {
    const { i18n } = useTranslation();

    return (
        <section className="vision-section">
            <h3 dangerouslySetInnerHTML={{ __html: i18n.t('vision.description') }}></h3>
        </section>
    );
}

export default Vision;
