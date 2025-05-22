# UsuariosGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**nombre** | **str** |  | [optional] 
**apellido** | **str** |  | [optional] 
**telefono** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.usuarios_get200_response import UsuariosGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UsuariosGet200Response from a JSON string
usuarios_get200_response_instance = UsuariosGet200Response.from_json(json)
# print the JSON string representation of the object
print(UsuariosGet200Response.to_json())

# convert the object into a dict
usuarios_get200_response_dict = usuarios_get200_response_instance.to_dict()
# create an instance of UsuariosGet200Response from a dict
usuarios_get200_response_from_dict = UsuariosGet200Response.from_dict(usuarios_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


