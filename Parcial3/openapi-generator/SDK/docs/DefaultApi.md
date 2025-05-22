# openapi_client.DefaultApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usuarios_get**](DefaultApi.md#usuarios_get) | **GET** /usuarios | Obtener un Usuario


# **usuarios_get**
> UsuariosGet200Response usuarios_get(id=id)

Obtener un Usuario

Devuelve un usuario

### Example


```python
import openapi_client
from openapi_client.models.usuarios_get200_response import UsuariosGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3000
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost:3000"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 56 # int | ID del usuario (optional)

    try:
        # Obtener un Usuario
        api_response = api_instance.usuarios_get(id=id)
        print("The response of DefaultApi->usuarios_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->usuarios_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| ID del usuario | [optional] 

### Return type

[**UsuariosGet200Response**](UsuariosGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Regresa un usuario |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

