/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';
import { Modal, Steps, Button, Form, Input, message, Row, Col, InputNumber } from 'antd';
import { GuestContext } from '../../context/GuestContext';
import './ProductAssignmentModal.css';

const { Step } = Steps;

export const ProductAssignmentModal = ({ product, visible, closeModal }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const { guestData } = useContext(GuestContext);
  const [form] = Form.useForm();
  const [buyOption, setBuyOption] = useState('');

  useEffect(() => {
    // Autocompletar el formulario con los datos del invitado
    form.setFieldsValue({
      name: guestData.name,
      email: guestData.email,
    });
  }, [guestData, form]);

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleConfirmGift = () => {
    form.validateFields().then(values => {
      fetch('https://2ylegiy3g3.execute-api.us-east-1.amazonaws.com/dev/assignProducts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          products: [{ product_id: product.id, quantity: values.quantity }],
          buyOption: buyOption, // Enviar la opción de compra seleccionada
        }),
      })
      .then(response => response.json())
      .then(data => {
        console.log("data from /assignProducts: ", data)
        if (data.Result === 'success') {
          message.success("¡Regalo asignado exitosamente!");
          setCurrentStep(3);
        } else {
          message.error('Error al asignar el producto');
        }
      })
      .catch(error => message.error('Error en el servidor: ' + error.message));
    });
  };

  return (
    <Modal
      title="Preparando tu regalo"
      visible={visible}
      onCancel={closeModal}
      footer={null}
      width={600}
    >
      <Steps current={currentStep} className="custom-steps">
        <Step title="Confirmación del regalo" />
        <Step title="Opciones de compra" />
        <Step title="Información del invitado" />
        <Step title="Finalizado" />
      </Steps>

      {currentStep === 0 && (
              <div className="modal-content-step mt-4">
                <div className="modal-product-info text-center">
                  <img src={product.imgSrc} alt={product.name} className="modal-product-img" />
                  <div className="product-details mt-4">
                    <h3>{product.name}</h3>
                    <p>(Precio estimado: ${product.price.toFixed(2)})</p>
                    <p>Categoría: {product.category}</p>
                  <button className="btn btn-primary text-center" onClick={nextStep}>
                    Sí, quiero regalarle {product.name} al <strong>Bebé Atlas</strong>
                  </button>
                  </div>
                </div>
              </div>
      )}

      {currentStep === 1 && (
        <div className='mt-4'>
          <h3>Opciones de compra</h3>
          <div className="modal-content-step">
            <p>
              Nosotros te damos la opción de compra en Amazon. Es una opción
              práctica. Sin embargo, puedes comprarlo en una tienda de tu elección.
            </p>
          </div>
          <div className="radio-options">
            <label>
              <input 
                type="radio" 
                checked={buyOption === 'amazon'} 
                onChange={() => setBuyOption('amazon')}
                className='mr-1'
              />  Comprar en Amazon
            </label>
            <label>
              <input 
                type="radio" 
                checked={buyOption === 'otro'} 
                onChange={() => setBuyOption('otro')}
                className='ml-3 mr-1'
              />  Comprar en otra tienda
            </label>
          </div>
          <button className="btn btn-primary" onClick={nextStep}>
            Siguiente
          </button>
        </div>
      )}

      {currentStep === 2 && (
        <Form form={form} layout="vertical" className="mt-4">
          {/* Nombre - Editable */}
          <Form.Item
            label="Nombre"
            name="name"
            rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
          >
            <Input />
          </Form.Item>

          {/* Correo - Editable */}
          <Form.Item
            label="Correo"
            name="email"
            rules={[{ required: true, type: 'email', message: 'Por favor ingresa un correo válido' }]}
          >
            <Input />
          </Form.Item>

          {/* Fila para Producto y Cantidad */}
          <Row gutter={16}>
            <Col span={16}>
              {/* Producto - No editable */}
              <Form.Item
                label="Producto"
                name="product"
                initialValue={product.name}
              >
                <Input disabled />
              </Form.Item>
            </Col>
            <Col span={8}>
              {/* Cantidad - Editable */}
              <Form.Item
                label="Cantidad"
                name="quantity"
                initialValue={1}
                rules={[{ required: true, type: 'number', min: 1, message: 'Cantidad mínima: 1' }]}
              >
                <InputNumber min={1} />
              </Form.Item>
            </Col>
          </Row>

          {/* Categoría - No editable */}
          <Form.Item
            label="Categoría"
            name="category"
            initialValue={product.category}
          >
            <Input disabled />
          </Form.Item>

          {/* Botones de confirmación y atrás */}
          <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '10px' }}>
            <Button
              type="primary"
              style={{ backgroundColor: '#17a2b8', borderColor: '#17a2b8' }} // Color de fondo del botón
              onClick={handleConfirmGift}
            >
              Confirmar regalo
            </Button>
            <Button onClick={prevStep}>Atrás</Button>
          </div>
        </Form>
      )}

      {currentStep === 3 && (
        <div className='mt-4 text-center'>
        <h3>¡Gracias por tu regalo!</h3>
        <p>Nos vemos el 20 de Octubre</p>
      
        {/* Validación para el enlace de Amazon */}
        {buyOption == 'amazon' ? (
          <div>
            <p>Puedes pedir tu producto en este link</p>
            <a href={product.link} target="_blank" rel="noopener noreferrer">
              <Button type="primary">Comprar en Amazon</Button>
            </a>
          </div>
        ) : (
          <Button type="primary" onClick={closeModal}>Cerrar</Button>
        )}
      </div>
      )}
    </Modal>
  );
};








